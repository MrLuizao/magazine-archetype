/**
 * Article Services
 * @author    CreativeApps <CreativeApps.A@gmail.com>
 * @copyright Copyright (c) 2020
 * @license   CreativeApps
 * 
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  getArticleByUrl(slugurl) {
    return this.getNewsArticles().find(c => c.slugurl === slugurl);
  }


  getNewsArticles() {
    return [
      {
        "author": "David Gaffen",
        "title": "When oil became waste: a week of turmoil for crude, and more pain to come - Reuters",
        "slugurl": "when-oil-became-waste-a-week-of-turmoil-for-crude-and-more-pain-to-come--reuters",
        "description": "The magnitude of how damaged the energy industry is came into full view on April 20 when the benchmark price of U.S. oil futures , which had never dropped below $10 a barrel in its nearly 40-year history, plunged to a previously unthinkable minus $38 a barrel.",
        "featureImg": 'assets/images/article1.jpeg',
        "publishedAt": "2020-04-26T05:17:48Z",
        "category": "World",
        "content": `<p>In just a few months, the coronavirus pandemic has destroyed so much fuel demand as billions of people curtail travel that it has done what financial crashes, recessions and wars had failed to ever do - leave the United States with so much oil there was nowhere to put it</p>.
        <img src="assets/images/article7.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "Miquel Ros, CNN",
        "title": "Where abandoned airplanes sit on Death Row",
        "slugurl": "where-abandoned-airplanes-sit-on-death-row",
        "description": "It had arrived at this little out-of-the-way airport, some 150 miles west of Barcelona, a couple of months earlier. Its operator, New York's Atlas Air, had parked it there due to lack of demand in the cargo sector -- until the coronavirus pandemic came along and turned the world on its head.",
        "featureImg": 'assets/images/article2.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Science",
        "content": `<p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>
        <img src="assets/images/article9.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Coronavirus: Spain's children run free from lockdown - but not all",
        "slugurl": "coronavirus-spains-children-run-free-from-lockdown--but-not-all",
        "description": "When Spain's government announced a national lockdown in mid-March, in reaction to coronavirus, not everyone was dismayed at the prospect of spending several weeks at home.",
        "featureImg": 'assets/images/article3.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Health",
        "content": `<p>Bicycles, skates and skateboards are allowed, but public parks remain off-limits. The lockdown's other conditions remain in place for the moment, with the government considering loosening it further in the second half of May.</p>
        <img src="assets/images/article2.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Victoria's Secret shifts image with new faces for Asia",
        "slugurl": "",
        "description": "US lingerie retailer Victoria's Secret has unveiled two new brand ambassadors as it looks to Asia to reverse its struggling fortunes.",
        "featureImg": 'assets/images/article4.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Sports",
        "content": `<p>Her appeal is such that since she has posted the video of her appearing in Victoria's Secret's new campaign, tens of thousands of fans have rushed to her page, sharing screen grabs from their phones showing that they have rushed to buy Victoria's Secrets products.</p>
        <img src="assets/images/article6.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC environment analyst",
        "title": "Coronavirus recovery plan 'must tackle climate change",
        "slugurl": "victorias-secret-shifts-image-with-new-faces-for-asia",
        "description": "Tackling climate change must be woven into the solution to the Covid-19 economic crisis, the UK will tell governments next week.",
        "featureImg": 'assets/images/article5.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Health",
        "content": `<p>The EU is already set on delivering a green stimulus. The Commission's Green Deal chief, Frans Timmermans, said every euro spent on economic recovery measures after the COVID-19 crisis would be linked to the green and digital transitions.</p>
        <img src="assets/images/article9.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "The truth about eating eggs",
        "slugurl": "the-truth-about-eating-eggs",
        "description": "Are eggs helpful to our health… or a cause of heart disease? BBC Future examines the evidence.",
        "featureImg": 'assets/images/article6.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "World",
        "content": `<p>As many countries urge populations to stay at home, many of us are paying more attention to our diets and how the food we eat can support our health. To help sort out the fact from the fiction, BBC Future is updating some of our most popular nutrition stories from our archive.</p>
        <img src="assets/images/article1.jpeg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "What eating a big meal does to your body",
        "slugurl": "what-eating-a-big-meal-does-to-your-body",
        "description": "Eating large meals can bring about changes that make us hungrier – but it’s not because your stomach “stretches”.",
        "featureImg": 'assets/images/article7.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Tech",
        "content": `<p>Why do we still feel hungry after feasts like Thanksgiving or Christmas? Does overeating “stretch” your stomach, meaning you have more room for food the following day? Even thinking about it now is making me hungry.</p>
        <img src="assets/images/article4.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Why you shouldn't trust your food cravings",
        "slugurl": "why-you-shouldnt-trust-your-food-cravings",
        "description": "Many of us believe that a food craving is our body’s way of signalling that it needs a certain nutrient. But research shows that’s unlikely to be true – with one possible exception.",
        "featureImg": 'assets/images/article8.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Business",
        "content": `<p>Most of us know what it feels like to experience food cravings. We usually crave higher calorie foods, which is why cravings are associated with weight gain and increased body mass index (BMI). But the story we tell ourselves about where these cravings come from could determine how easily we give into them.</p>
        <img src="assets/images/article3.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Is juicing actually good for you?",
        "slugurl": "is-juicing-actually-good-for-you",
        "description": "Many of us see fresh fruit juice as a healthy way to get a mega-dose of vitamins – but is that true? And what does it do to our blood sugar and insulin levels?",
        "featureImg": 'assets/images/article9.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Health",
        "content": `<p>Juices containing vegetables can provide more nutrients and less sugar than juices made up of just fruit – but they still lack valuable fibre. Diets high in fibre have been linked to a lower risk of developing coronary heart disease, stroke, high blood pressure and diabetes, and it's recommended adults consume 30g per day.</p>
        <img src="assets/images/article6.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Is soya bad for women's health?",
        "slugurl": "is-soya-bad-for-womens-health",
        "description": "Soy's isoflavones have oestrogenic properties — and have been blamed for raising the risk of breast cancer (as well as prostate cancer for men). But is this really the case?",
        "featureImg": 'assets/images/article10.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Science",
        "content": `<p>The controversy around soya comes down to its uniquely high content of isoflavones. These compounds have oestrogenic properties, which means they act like oestrogen, the primary female sex hormone, and bind to oestrogen receptors in the body – and oestrogen can fuel the growth of some types of breast cancer.</p>
        <img src="assets/images/article11.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Can drinking red wine ever be good for us?",
        "slugurl": "can-drinking-red-wine-ever-be-good-for-us",
        "description": "We’ve been led to believe that an occasional glass of wine might be better than abstaining from alcohol altogether, but that might not be the case.",
        "featureImg": 'assets/images/article11.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Health",
        "content": `<p>What is less well-known is that research has found strong links between alcohol and cancer. One bottle of wine per week is associated with an increased absolute lifetime cancer risk for non-smokers of 1% for men and 1.4% for women. This equates one bottle of wine per week to five cigarettes for men, or 10 for women.</p>
        <img src="assets/images/article4.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
      {
        "author": "BBC News",
        "title": "Cats can pass the coronavirus to each other, study finds",
        "slugurl": "cats-can-pass-the-coronavirus-to-each-other-study-finds",
        "description": "Eating large meals can bring about changes that make us hungrier – but it’s not because your stomach “stretches”.",
        "featureImg": 'assets/images/article12.jpg',
        "publishedAt": "2020-04-26T04:47:57Z",
        "category": "Tech",
        "content": `<p>Why do we still feel hungry after feasts like Thanksgiving or Christmas? Does overeating “stretch” your stomach, meaning you have more room for food the following day? Even thinking about it now is making me hungry.</p>
        <img src="assets/images/article4.jpg">
        <p>With hundreds of undelivered aircraft piling up and space at its facilities starting to run out, the American manufacturer turned one of the employee car parks at its Paine Field facility, near Seattle, into a temporary airplane depot.</p>`
      },
    ]
  }
}
