defmodule ProjectManager.UserSocket do
  use Phoenix.Socket

  alias ProjectManager.{GuardianSerializer}

  ## Channels
  # Informs users about events related to them, for example when they
  # are invited to join a board.
  channel "users:*", ProjectManager.UserChannel
  # Handles messages for managing boards, lists and cards, and informs
  # any user who may be viewing the bouard at the exact moment of any change.
  channel "boards:*", ProjectManager.BoardChannel

  ## Transports
  # http://www.phoenixframework.org/docs/heroku
  transport :websocket, Phoenix.Transports.WebSocket,
    timeout: 45_000
  transport :longpoll, Phoenix.Transports.LongPoll

  # Socket params:
  # - are passed from the client and
  # - can be used to verify and authenticate a user

  # Token verification
  # - After verification, you can put default assigns into the socket that will
  # be set for all channels.
  # - To deny connection, return `:error`.
  # - See `Phoenix.Token` documentation for examples.

  # When invoked with a token, the connect function will:
  # - verify the token
  # - get the user from the token
  # - assign that user to the socket so that it is available for all channels
  def connect(%{"token" => token}, socket) do
    case Guardian.decode_and_verify(token) do
      {:ok, claims} ->
        case GuardianSerializer.from_token(claims["sub"]) do
          {:ok, user} ->
            # Set the default data to socket for all channels.
            {:ok, assign(socket, :current_user, user)}
          {:error, _reason} ->
            :error  # Deny connection
        end
      {:error, _reason} ->
        :error  # Deny connection
    end
  end

  # When invoked without a token, it will be considered as an error and the connection
  # will be denied.
  def connect(_params, _socket), do: :error  # Deny connection

  def id(socket), do: "users_socket:#{socket.assigns.current_user.id}"
end
