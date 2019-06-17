# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_03_145443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gigs", force: :cascade do |t|
    t.string "name", null: false
    t.string "date", null: false
    t.string "borough", null: false
    t.string "genre", null: false
    t.text "event_info", null: false
    t.string "tickets_url"
    t.string "image_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gigs_users", id: false, force: :cascade do |t|
    t.bigint "gig_id", null: false
    t.bigint "user_id", null: false
    t.index ["gig_id", "user_id"], name: "index_gigs_users_on_gig_id_and_user_id"
    t.index ["user_id", "gig_id"], name: "index_gigs_users_on_user_id_and_gig_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
