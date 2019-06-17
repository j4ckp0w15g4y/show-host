class CreateJoinTableGigsUsers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :gigs, :users do |t|
      t.index [:gig_id, :user_id]
      t.index [:user_id, :gig_id]
    end
  end
end
