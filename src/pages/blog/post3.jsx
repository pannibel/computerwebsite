import Link from "next/link";
import styles from "../../styles/page.module.scss";

function blog3() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>
          <Link href="/blog">blog</Link>
        </h1>
      </header>

      <div className={styles.backbutton}>
        <Link href="/">back home</Link>
      </div>

      <section className={styles.post}>
      <div className={styles.backbutton}>
          <Link href="/blog">{`<<<`}</Link>
        </div>
        <div className={styles.title}>
          <h3>IS CARING A LOSING GAME?</h3>
          <h4>OR IS DO WE LOSE OURSELVES BY NOT CARING?</h4>
        </div>

        <div className={styles.bodytext}>
          <section>
            <p>
              It’s cool to care. A good friend of mine told me this, in a
              situation where I felt that caring is a burden. It complicates
              life, it makes us feel stupid, and generally, even if only unsaid,
              it is labeled „uncool”.</p>
              <p>
              For what reason?
            </p>
          </section>

          <section>
            <p>
              When a celebrity couple breaks up and we see one of them out and
              about, living life as if nothing happened, we think, good for
              them. They have moved on already, they avoided the sadness, the
              grief, inviting potential happiness into their lives as fast as
              they could. That’s cool.</p>
              <p>
              Taking this example, maybe the answer is that living life
              reasonably is cool. It makes sense to move on as soon as possible.
              It is essentially for our own good, if you will. Having an easy
              time moving abroad and leaving our friends behind, staying
              positive after losing a job or failing a class, even if they are
              not conscious choices and you are just a person who’s naturally
              able not to care, seems like these things are in your favor.
            </p>
          </section>

          <section>
            <p>
              It’s also a generally negative experience to be the one who cares
              more than another person or other people in a certain setting. To
              be the one who cares more about a friendship or a relationship
              sucks. We like to maintain a balance in caring so that it’s equal,
              upkeeping a homeostasis of feelings, where we are always
              monitoring the level of care of the others and regulate our own
              based on the results.
            </p>
          </section>

          <section>
            <p>
              The amount of times I said the phrase „let me care less then”
              hurts my soul. Let me not give you all this care, because I’d
              still rather choose the pain of withholding than not having it
              reciprocated. Ouchie.</p>
              <p>
              So we try not to care as much as we can. But what is the price of
              that?
              <br/>I feel it might be a bit otherwordly, hard to describe and
              hard to grasp, when I try to answer the question. We pay the price
              of being true to ourselves. We lose depth, potential, we devalue
              feelings, risks, and worst of all, we become used to it so much,
              we don’t even think twice anymore.
            </p>
          </section>

          <section>
            <p>
              I started looking at caring as a negative feeling. Something I
              give and something I withhold, a currency, a weapon that’s capable
              of hurting me or others. Something I can control, something that
              helps me have control. Something that’s uncool to have too much
              of.
            </p>
          </section>

          <section>
            <p>
              „I don’t care that much.”
              </p>
              <p>
              „It’s okay if you do.”
            </p>
          </section>

          <section>
            <p>
              Not a lot of people say that. Made me stop in my rush towards
              solving a conflict. I was all about getting it done with the least
              amount of collateral damage. As I usually do. Withholding care is
              my weapon, or maybe my shield in this case. It’s not even a
              conscious choice, but it’s an obvious choice.</p>
              <p>I wish I didn’t care. I’m training myself not to care, I’m
              trying to get myself used to it, because it’s the better way. And
              all of a sudden someone tells me it’s no way at all. There are no
              ways other than what naturally comes to you. Fighting this way,
              training yourself out of it is the worst way you could go.
            </p>
          </section>

          <section>
            <p>
              Caring is deep and heavy sometimes. It demands our time and
              energy. If in that conflict I chose the path where I care, it was
              gonna take more than if I had just skipped over it. But then
              again, whenever I chose the latter option, I was left feeling a
              bit empty, with an unfinished business and a lot of tucked away
              feelings.</p>
              <p>
              So I am not doing that. And I end up crying, crying so much.
              Waking up and going to sleep with a heavy mind. A pain in my chest
              when I miss them. Writing about it. Being honest about it. Yes, it
              does suck, and it does make me question things I haven’t
              questioned before, it makes me uncomfortable, it makes me feel
              bad.
              <br />
              It makes me feel the truth. And it’s important to know the truth.
            </p>
          </section>

          <section>
            <p>
              I have a hard time caring about myself though. Funnily enough,
              this same person made me realize that I should care more. I
              remember thinking, „if someone else can care about me and my
              feelings this much, why can’t I? If this person respects them and
              treats them as something normal, why don’t I?”.</p>
              <p>
              It’s hard not to fall in love with someone like that.
              <br />
              Doesn’t take much does it? Someone who listens and asks, cares and
              shows it too. Basically. So is that the key to self love?
              Listening to yourself, caring about yourself and showing yourself
              this care? And isn’t it true love if they help you learn to love
              yourself? But maybe I should continue caring about these feelings
              - if I learned anything, it’s this. Being honest and authentic is
              self love. Sharing it with someone is caring. It doesn’t have to
              be good or bad, it doesn’t have to matter where they stand, what
              the outcome will be. It’s essentially holding it out in the palm
              of my hand towards them and saying, this is me. I want you to know
              me. Even if it’s not what you hoped for, but I can’t make it into
              something it’s not.
            </p>
          </section>

          <section>
            <p>
              Caring is a losing game in the end. Giving it up against the
              natural flow of things. Surrendering to truths and real feelings.
              Choosing the harder path in order to remain authentic. Learn to
              care about yourself. I am learning too, and it wasn’t even easy to
              find a reason why. I needed another person’s care for that. We
              need each other’s care too.</p>
              <p>
              It is cool to care. Care as much as you need, as much as you have,
              not for reciprocity, not to control, but for itself.
            </p>
          </section>
        </div>

        <div className={styles.postdate}>
          <p>03.10.2023.</p>
        </div>
      </section>

      <footer className={styles.footer}>pannibel 2023</footer>
    </main>
  );
}

export default blog3;
