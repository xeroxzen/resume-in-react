// <h4 className="widget-title">Latest Tweets</h4>
// <ul id="twitter">
//   <li>
//     <span>
//     Surprisingly, I thought Elon's ethos was anti meetings, or few meetings as possible.
//
//     But if those are like stand-up meetings and discussions then that's pretty cool, not the the formal type of a meeting I'm already thinking 😅
//       <a href="./">https://twitter.com/andilejaden/status/1516146426564292616?ref_src=twsrc%5Etfw</a>
//     </span>
//     <b>
//       <a href="./">2 Days Ago</a>
//     </b>
//   </li>
//   <li>
//     <span>
//       Sed ut perspiciatis unde omnis iste natus error sit
//       voluptatem accusantium doloremque laudantium, totam rem
//       aperiam, eaque ipsa quae ab illo inventore veritatis et
//       quasi
//       <a href="./">http://t.co/CGIrdxIlI3</a>
//     </span>
//     <b>
//       <a href="./">3 Days Ago</a>
//     </b>
//   </li>
// </ul>

// Contact page
<Slide left duration={1000}>
  <div className="eight columns">
    <form action="" method="post" id="contactForm" name="contactForm">
      <fieldset>
        <div>
          <label htmlFor="contactName">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            defaultValue=""
            size="35"
            id="contactName"
            name="contactName"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactEmail">
            Email <span className="required">*</span>
          </label>
          <input
            type="text"
            defaultValue=""
            size="35"
            id="contactEmail"
            name="contactEmail"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactSubject">Subject</label>
          <input
            type="text"
            defaultValue=""
            size="35"
            id="contactSubject"
            name="contactSubject"
            onChange={this.handleChange}
          />
        </div>

        <div>
          <label htmlFor="contactMessage">
            Message <span className="required">*</span>
          </label>
          <textarea
            cols="50"
            rows="15"
            id="contactMessage"
            name="contactMessage"
          ></textarea>
        </div>

        <div>
          <button className="submit">Submit</button>
          <span id="image-loader">
            <img alt="" src="images/loader.gif" />
          </span>
        </div>
      </fieldset>
    </form>

    <div id="message-warning"> Error boy</div>
    <div id="message-success">
      <i className="fa fa-check"></i>Your message was sent, thank you!
      <br />
    </div>
  </div>
</Slide>;
