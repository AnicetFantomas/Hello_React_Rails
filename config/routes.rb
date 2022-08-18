Rails.application.routes.draw do
  get 'root/index'
  namespace :api do
    resources :messages
  end

  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
