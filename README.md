# ProjectManager

In this repository, I will learn how to build a Trello-like project management application using Elixir, Phoenix framework and React. I follow the tutorial [Trello tribute with Phoenix and React](https://github.com/bigardone/phoenix-trello) by Ricardo García Vega.

---

## Get started

#### Install dependencies
- `mix deps.get`

#### Create and migrate your database
- `mix ecto.create && mix ecto.migrate`

#### Install brunch etc
- `npm install`

#### Start Phoenix endpoint
- `mix phoenix.server`

Then visit [`localhost:4000`](http://localhost:4000) from your browser.

---

## Production

- [http://www.phoenixframework.org/docs/deployment](http://www.phoenixframework.org/docs/deployment)

---

## Resources about Phoenix framework

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix

---

## Phoenix vs Rails

- [Comparing Rails and Phoenix: Part I](https://blog.codeship.com/comparing-rails-and-phoenix-part-i/) by Leigh Halliday
- [Rails CLI Commands for Elixir & Phoenix](https://blog.fourk.io/rails-cli-commands-for-elixir-phoenix-88cb7da45fe7#.z2s6njfm6) by Alex Weidmann

- `mix` is like `bundle` but alse `rake`

| Phoenix                                                | Rails                                      |   |
|---                                                     |---                                         |---|
| mix phoenix.new <app_name>                             | rails new <app_name>                       |   |
| mix deps.get, npm install                              | bundle install                             |   |
| mix phoenix.gen.html User users name username:string   | rails g scaffold User name username:string |   |
| mix phoenix.gen.json User users name username:string   |                                            |   |
| mix phoenix.gen.model User users name username:string  | rails g model User name username:string    |   |
| mix ecto.create                                        | rails db:create                            |   |
| mix ecto.migrate                                       | rails db:migrate                           |   |
| mix ecto.drop                                          | rails db:drop                              |   |
| mix run priv/repo/seeds.exs                            | rails db:seed                              |   |
| mix phoenix.routes                                     | rails routes                               |   |
| mix.exs, package.json                                  | Rakefile                                   |   |
| mix phoenix.server                                     | rails server                               |   |
| iex -S mix                                             | rails console                              |   |
| mix test                                               | rails test                                 |   |

---

## Some libraries I used

#### HTTP server
- [ninenines/cowboy](https://github.com/ninenines/cowboy)

#### Authentication framework
- [ueberauth/guardian](https://github.com/ueberauth/guardian)

#### Password hashing
- [riverrun/comeonin](https://github.com/riverrun/comeonin)

#### JSON Object Signing and Encryption (JOSE)
- [potatosalad/erlang-jose](https://github.com/potatosalad/erlang-jose)

And much much more

---

## Some techniques I learned

#### Promise
- Promise object is used for asynchronous computations.
- Promise object represents a value which may be available now, or in the future, or never.

- The 3 states of a promise:
  + pending   => The initial state of a promise.
  + fulfilled => The state of a promise representing a successful operation.
  + rejected  => The state of a promise representing a failed operation.
- Once a promise is fulfilled or rejected, it will be immutable.
- [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [https://mdn.mozillademos.org/files/8633/promises.png](https://mdn.mozillademos.org/files/8633/promises.png)

#### Re-installing NPM

When things act strange after modifying asset configurations, just reinstalling may fix it.

```
rm -rf node_modules && npm install
```
