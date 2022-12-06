
## Inspiration
Plasma believes in consistency and compounded returns. We are on a mission to democratize the esports landscape by removing the barrier to entry for new e-athletes that is posed by the sheer steep skill curve to compete with top dogs.

Plasma recognizes the barrier posed by the skill gap for new e-athletes or athletes with disabilities to sustain their e-sports career. According to the data, we analyzed using the `LiquipediaAPI` the average career span for most of the new esports players ends within less than a year and they return to non-competitive lobbies or casual players. On further digging through gaming forums on Reddit and Steam reviews, most players opt out of competitive games because the money they spend to enter the tournaments or other competition doesn't have satisfying ROI as most of the amateur players get eliminated by mid to top-tier player in the first or second round. This discourages the new player and makes the competition out of their reach.

These stories inspired us to redesign the competitive challenges with education in the loop design with a focus on lobby divisions on the skill levels of players while challenging and rewarding them for skill development during the competitions to learn the skills that top players utilize to blitz their opponents.

This redesign of competitions aims to put even noobs like my mom to one-day play toe to toe with top players of Age of Empires. By constantly developing skills through competitions against players of similar skill levels, players will enjoy their learning journey to the top by competing in actual competitions with actual rewards. Think of UFC weight categories!

## What it does

Our platform aims to ingest gaming activity by providing game developers with `Plasma API` to log their gaming events in Plasma Labs. These logs will then be used to build individual player profiles and cluster the profiles based on their gameplay data and using machine learning to cluster the profiles to build dynamic divisions based on vectors such as play styles and skill levels.

With Plasma, esports teams like **Team Liquid** can easily recruit budding talent and provision their skill development in their 14 games category by constantly putting them in challenging tournaments that reward them based on skills, and by the end of the tournament players end up learning a key or set of key skills used by top players all the while enjoying competing in various settings (other than just elimination) and winning rewards. The platform provides a points system that can be easily converted by the organizers into their custom credits (_credits for LiquidPlus_), money, or some other rewards.

  

## How we built it

This section summarizes the tech used to build the system and the decisions for choosing each component. See the diagram for the high-level technical architecture of Plasma.

| Component | Technology | Status | Description |
| ------ | ----------- | ----------- | ----------- |
| Frontend | <ul> <li/> ReactJS <li/> Bootstrap </ul> | Deployed **[Active]**| <ul> <li/> ReactJS is chosen for frontend as it's high-performant frontend framework that provides easy to configure settings for rapid UI changes. Tesla uses it ;) <li/> Bootstrap for styling and theming. </ul>|
| Backend |<ul> <li/> Django [Python] <li/> Google AppEngine </ul>| Deployed **[Active]**| <ul> <li/>Django is a heavy-weight backend framework that can reliably scale to millions of active users at a time with security principles builtin. <li/> With Google AppEngine Plasma App can scale to millions of users and with minimal latency. </ul>|
| Authentication | AuthO | Integrated | AuthO is a standard industry solution that provides secure user authentication infrastructure ensuring user data safety.|
| Load Balancing | Google Load Balancing | Integrated | Since the gaming community is global load balancing will help us ensure high availability for different regions.|
| Monitoring & Logging | <ul> <li/>Error Reporting <li/> Monitoring <li/> Logging</ul> | Integrated | No engineering system is ever finished and needs continuous health monitoring and a team of engineers to keep the service live. We leverage Google's built-in error reporting, monitoring and logging services to report errors, monitor system health, and get alerts for incidents.|
| Plasma AI Engine |<ul> <li/>BigQuery <li/> Dataflow <li/> Tensorflow</ul> **Twitter uses these extensively| Under Construction |<ul> <li/>BigQuery and Dataflow provide capabilities to analyze and process large data with distributed computing provided by Google.<li/> Tensorflow will be used to build machine learning models to implement the `PlasmaAI` algorithm that will power the skill assessment and e-athlete division engine.</ul>|
| External APIs |<ul> <li/>LiquipediaAPI<li/> Custom Gaming APIs</ul>| Partially Used |<ul> <li/>**LiquipediaAPI**: Used to get data for us to inform our initial motivation as explained in inspiration section. We plan to extensively use it to integrate historic data of players as model inputs to the `PlasmaAI` algorithm in the future.<li/> **Custom Gaming APIs**: These APIs refer to gaming APIs that will be integrated with _Plasma_ as we land future partnerships.</ul>|

  

## Challenges we ran into

1. **Problem Verification**: Initial motivation came from seeing my mom giving up on playing in Age of Empires competitive plays because of the skill gap. But I had to verify that it's a feasible problem to solve before committing. The initial challenge was how to verify this problem's validity and scale. I partially found the solution by using data from `LiquipediaAPI` as the source of truth. More research needs to be done.

2. **Scoping the Project**: Scoping was another issue, given the time constraint. I had to balance not being carried away with implementation details of the backend and focus more on the storytelling aspects to deliver the message in the most simple and effective way for this problem.

3. **Technical Challenges**: Given the short timespan of the competition and the complexity of the problem I am tackling and being solo on the team, I ran into several technical challenges while implementing proof of concept of both frontend and backend. Plus I am not a frontend person so that part was especially difficult to implement because I had to brush up React and deal with issues like CORS.

## Accomplishments that we're proud of

1. **Product Ideation**: I think the skill gap problem is a major barrier to entry in competitive esports for new and players with disabilities. Skill gap degrades the user experience, and provides an unfair advantage to able players and players with experience. Being able to design a solution that increases UX of competitions by putting players in fair competitive brackets and all the while providing continuous skill development with education-in-the-loop design.

2. **Business Idea Validation**: The idea developed very organically by observing a real issue my mom is having and then being able to use `LiquipediaAPI` to quickly download and analyze the data to validate that it's a valid problem at scale is pretty creative and rigorous.

3. **Integrating Feedback**: During the competition I was able to reach out to the hacking community and get to meet the Liquid team and get their feedback on current challenges for the esports players and get some anchors on what will be some useful features, this helped user based feature selection and development process. The platform is representative of key user needs and cuts down any useless features to focus on one core problem.

## What we learned

  1. **Technical**: 
	  * Working with CORS in production setting. CORS is a technical detail for preventing bad actors to forge identity as legitimate user.
	  * Frontend speedups using async calls.
	  * Setting up monitoring for frontend events to monitor performance of different parts of the frontend. 
	  * Setting up rate limited calls for the LiquipediaAPI to not get blocked by them. 
	  
2. **Project Scoping**: There is so much I want to achieve with the product and will do eventually. But for the sake of this hackathon I ruthlessly killed the ideas to focus on one key idea that I wanted to convey for this product, that defines its soul. 

## What's next for Plasma Labs

1. **Technical Maturity**: As I just started the project, the POC needs technical maturity before pitching it to potential game developers as pilot to post their tournaments. The AI algorithm is in conception stage and needs to be tested in various settings with different gaming data to make it production ready. There are also some bugs in the infrastructure for both front and backend. The focus will be to mature both infrastructure and the machine learning algorithm. 

2. **Acquiring Game Studios**: The goal during the technical maturity phase is to start initial talks with the gaming studios to start building relations and as we approach the pilot level maturity I will focus on getting atleast 3 paying pilots in next year. 

3. **Putting Together Team of Superheros**: Initial concept is good, but I need to get a team of the superheros to make this rocketship launch. So I will focus on acquiring team of atleast 1 full stack engineer, 1 machine learning engineer with expereince in algorithm design and 1-2 product managers with some expereince with sales. 

4. **Investors**: Ofc for all this I will need to get mission aligned investors to make this achieve. So next year the goal is to reachout to investors and gauge their interest to secure a seed round.