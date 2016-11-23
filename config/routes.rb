Rails.application.routes.draw do
  root 'slides#index'

  resources :slides do
    resources :photos
    resources :comments
  end
end
