# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# t.string :name
# t.string :date
# t.string :borough
# t.text :event_info
# t.string :tickets_url
# t.string :image_url
user1 = User.create({
    username: "jackpowisgay"
})

user2 = User.create({
    username: "jaredhollis"
})

gig1 = Gig.create({
    name: "Battle of the Bands",
    date: "07/22/2019",
    genre: "Metal",
    borough: "Brooklyn",
    event_info: "This years hottest show",
    tickets_url: "www.blahblah.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig2 = Gig.create({
    name: "Titan Show",
    date: "07/22/2019",
    borough: "The Bronx",
    genre: "Jazz",
    event_info: "Get READY!!!!!",
    tickets_url: "www.alpha.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig3 = Gig.create({
    name: "The Cretins Live",
    date: "10/12/2019",
    borough: "Staten Island",
    genre: "Punk",
    event_info: "Live for the first time in 70(?) years, the Cretins are back with new material!!",
    tickets_url: "www.tickets-cretins.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig4 = Gig.create({
    name: "Ryan's gig",
    date: "10/12/2019",
    borough: "Manhattan",
    genre: "Hip-hop",
    event_info: "Ryan's back with a heap of new material!!!",
    tickets_url: "www.tickets-cretins.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig5 = Gig.create({
    name: "Show",
    date: "10/12/2019",
    borough: "Queens",
    genre: "Rock",
    event_info: "Rock gig",
    tickets_url: "www.tickets-cretins.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",

})

gig6 = Gig.create({
    name: "Concert",
    date: "10/25/2019",
    borough: "Manhattan",
    genre: "Dance",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.dance.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",

})

gig7 = Gig.create({
    name: "Event",
    date: "09/10/2019",
    borough: "Queens",
    genre: "Metal",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.metal.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",

})

gig8 = Gig.create({
    name: "Noise Show",
    date: "09/28/2019",
    borough: "The Bronx",
    genre: "Jazz",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.jazz.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig9 = Gig.create({
    name: "Crazy Aces",
    date: "11/14/2019",
    borough: "Staten Island",
    genre: "Punk",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.punk.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})





gig1.users.push(user1, user2)
gig2.users.push(user2)

#   Movie.find(1).genres.push(Genre.find(4), Genre.find(3))
