import { Button, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        Get in Touch
      </p>
      <h2 className="heading-secondary !mb-5">Join the Flock</h2>

        <p>
          Ready to take flight with $CHICKEN? Our community is the heart and soul of this journey. Connect with fellow enthusiasts, share memes, and be part of the conversation that's setting the crypto world abuzz. $CHICKEN is not just a coin; it's a community, and every member is a key ingredient in this recipe for success.
        </p>

      <Button type="link" size="lg" href='chickensol.com' center className="mt-12">
        Say Hello
      </Button>
    </Wrapper>
  );
};

export default Contact;
