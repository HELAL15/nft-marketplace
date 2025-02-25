import React from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Image from 'next/image';
import SubscribeMail from '../common/SubscribeMail';

const JoinWeeklyDigest = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="bg-body-secondary rounded-rounded p-6 md:p-8 lg:p-10 xl:p-12 grid md:grid-cols-2 items-center gap-6">
            <Image
              draggable="false"
              src={'/assets/digest.png'}
              width={0}
              height={0}
              sizes="(max-width: 768px) 100vw, 500px"
              priority={true}
              className="w-full h-full object-cover rounded-rounded overflow-hidden"
              alt="join our weekly digest"
            />
            <div className="space-y-8">
              <div className="space-y-4 max-w-[360px]">
                <h3 className="text-4xl font-semibold">
                  Join our weekly digest
                </h3>
                <p className="text-darkWhite font-medium text-lg">
                  Get exclusive promotions & updates straight to your inbox.
                </p>
              </div>
              <SubscribeMail inSection={true} />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default JoinWeeklyDigest;
