Rails.application.routes.draw do
  resources :users
  # , only: [:index, :show]
  resources :gigs
  # , only: [:index, :show]

  # scope '/users/:user_id' do
  #   resources :gigs
  # end

  # scope '/gigs/:gig_id' do
  #   resources :users
  # end

end
