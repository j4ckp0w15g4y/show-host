# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# t.string :name
# t.string :date
# t.string :location
# t.text :event_info
# t.string :tickets_url
# t.string :image_url


gig1 = Gig.create({
    name: "Battle of the Bands",
    date: "07/22/2019",
    location: "Williamsburg",
    event_info: "This years hottest show",
    tickets_url: "www.blahblah.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w"
})

user1 = User.create({
    username: "jackpowisgay"
})

user2 = User.create({
    username: "jaredhollis"
})

gig1.users.push(user1, user2)


#   Movie.find(1).genres.push(Genre.find(4), Genre.find(3))
