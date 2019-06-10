user1 = User.create({
    username: "jackpowisgay"
})

user2 = User.create({
    username: "jaredhollis"
})

gig1 = Gig.create({
    name: "Battle of the Bands",
    date: "2019-10-07",
    genre: "Metal",
    borough: "Brooklyn",
    event_info: "This years hottest show",
    tickets_url: "www.blahblah.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig2 = Gig.create({
    name: "Titan Show",
    date: "2019-11-07",
    borough: "The Bronx",
    genre: "Jazz",
    event_info: "Get READY!!!!!",
    tickets_url: "www.alpha.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig3 = Gig.create({
    name: "The Cretins Live",
    date: "2019-12-13",
    borough: "Staten Island",
    genre: "Punk",
    event_info: "Live for the first time in 70(?) years, the Cretins are back with new material!!",
    tickets_url: "www.tickets-cretins.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig4 = Gig.create({
    name: "Ryan's gig",
    date: "2019-12-11",
    borough: "Manhattan",
    genre: "Hip-hop",
    event_info: "Ryan's back with a heap of new material!!!",
    tickets_url: "www.tickets-cretins.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig5 = Gig.create({
    name: "Show",
    date: "2019-10-09",
    borough: "Queens",
    genre: "Rock",
    event_info: "Rock gig",
    tickets_url: "www.tickets-cretins.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",

})

gig6 = Gig.create({
    name: "Concert",
    date: "2019-10-25",
    borough: "Manhattan",
    genre: "Dance",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.dance.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",

})

gig7 = Gig.create({
    name: "Event",
    date: "2019-09-10",
    borough: "Queens",
    genre: "Metal",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.metal.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",

})

gig8 = Gig.create({
    name: "Noise Show",
    date: "2019-09-28",
    borough: "The Bronx",
    genre: "Jazz",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.jazz.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})

gig9 = Gig.create({
    name: "Crazy Aces",
    date: "2019-11-14",
    borough: "Staten Island",
    genre: "Punk",
    event_info: "Lorem ipsum, lorem ipsum, lorem ipsum",
    tickets_url: "www.punk.com",
    image_url: "https://static1.squarespace.com/static/5853f25b6b8f5bf3f771d7d4/t/59bcc019c027d81dff08d41d/1505542184892/gigvr_home_page_banner.jpg?format=1500w",
})





gig1.users.push(user1, user2)
gig2.users.push(user2)

#   Movie.find(1).genres.push(Genre.find(4), Genre.find(3))
