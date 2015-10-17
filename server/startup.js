Meteor.startup( function() {

	var seedData = [
		{
			title: 'The foot massage',
			text: 'Look, just because I don&rsquo;t be givin&rsquo; no man a foot massage don&rsquo;t make it right for Marsellus to throw Antwone into a glass motherfuckin&rsquo; house, fuckin&rsquo; up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, &rsquo;cause I&rsquo;ll kill the motherfucker, know what I&rsquo;m sayin&rsquo;?'
		},
		{
			title: 'Making the show',
			text: 'Well, the way they make shows is, they make one show. That show&rsquo;s called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they&rsquo;re going to make more shows. Some pilots get picked and become television programs. Some don&rsquo;t, become nothing. She starred in one of the ones that became nothing.'
		},
		{
			title: 'Where is the money',
			text: 'My money&rsquo;s in that office, right? If she start giving me some bullshit about it ain&rsquo;t there, and we got to go someplace else and get it, I&rsquo;m gonna shoot you in the head then and there. Then I&rsquo;m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I&rsquo;m talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?'
		},
		{
			title: 'How Bones break',
			text: 'Your bones don&rsquo;t break, mine do. That&rsquo;s clear. Your cells react to bacteria and viruses differently than mine. You don&rsquo;t get sick, I do. That&rsquo;s also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We&rsquo;re on the same curve, just on opposite ends.'
		}
	]


  var articles = Articles.find({}).fetch()
  var len = articles.length
  var seedLen = seedData.length

	/* if db is empty, seed some articles */
  if(len === 0) {

		for(i=0; i<seedLen; i++){
			Articles.insert(seedData[i])
		}

	}
})