Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # post '/users/', to: 'users#create'
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
