Rails.application.routes.draw do
 
 scope '/api' do 
  resources :users
  resources :gigs
  resources :gigs do
    resources :location 
  end
end 
end
