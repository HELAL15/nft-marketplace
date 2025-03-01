import Image from 'next/image';
import Form from './Form';

const page = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      <Image
        src="/assets/auth.png"
        width={0}
        height={0}
        quality={100}
        sizes="100"
        alt="Authentication"
        className=" h-[300px] md:h-full xl:h-full w-full object-cover"
      />
      <div className="content max-md:px-4 py-6">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Create account
        </h1>
        <p className="mt-4  md:text-lg lg:text-xl font-light md:rtl:pl-20 lg:rtl:pl-48 md:ltr:pr-20 lg:ltr:pr-48">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <Form />
      </div>
    </main>
  );
};

export default page;
