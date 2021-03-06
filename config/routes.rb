RoseBid::Application.routes.draw do
 
  get "profile/style_profile"
  get "profile/events_flowers"
  get "profile/final_details"
  get "profile/review_request"
  get "profile/confirmation"
  get "profile/view_quotes"
  get "profile/bellaflora_profile"
  get "profile/bellaflora_quote"
  root 'landing_pages#indexa'

  get "landing_pages/indexa"
  get "landing_pages/indexb"

  get "user_flow/login"
  get "user_flow/eventsel"
  get "user_flow/pictures"
  get "user_flow/profile"
  get "user_flow/products"
  get "user_flow/order_details"
  get "user_flow/confirmation"
  get "user_flow/view_quotes"
  get "user_flow/bella_flora_quote"
  get "user_flow/bella_flora_details"
  get "user_flow/style_summary"
  get "user_flow/profile_details_sign_up"
  get "user_flow/eventsandproducts"

  get "static_pages/about"
  get "static_pages/contact"
  get "static_pages/how_it_works" 
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
