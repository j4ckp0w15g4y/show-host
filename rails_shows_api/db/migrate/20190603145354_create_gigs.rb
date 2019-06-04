class CreateGigs < ActiveRecord::Migration[5.2]
  def change
    create_table :gigs do |t|
      t.string :name, null: false
      t.string :date, null: false
      t.string :location, null: false
      t.string :genre, null: false
      t.text :event_info, null: false      
      t.string :tickets_url
      t.string :image_url
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
