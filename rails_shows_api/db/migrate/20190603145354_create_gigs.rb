class CreateGigs < ActiveRecord::Migration[5.2]
  def change
    create_table :gigs do |t|
      t.string :name
      t.string :date
      t.string :location
      t.text :event_info
      t.string :tickets_url
      t.string :image_url

      t.timestamps
    end
  end
end
