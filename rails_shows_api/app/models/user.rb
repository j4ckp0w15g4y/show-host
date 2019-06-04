class User < ApplicationRecord
   
    has_many :gigs 
    has_and_belongs_to_many :gigs
end
