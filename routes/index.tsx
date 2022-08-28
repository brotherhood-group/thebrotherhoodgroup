/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { tw } from "@twind";
import { HeadElement } from "../components/HeadElement.tsx";
import { PageProps } from "$fresh/server.ts";

export default function Home(ctx: PageProps) {
  return (
    <>
      <HeadElement
        title="Home"
        description=""
        url={ctx.url}
      />
      <section
        class={tw`w-full pt-5 pb-8 bg-black bg-cover lg:pb-32`}
      >
        <div
          class={tw`max-w-2xl px-8 pb-10 mx-auto space-y-8 text-white md:max-w-5xl lg:px-5 xl:px-0`}
        >
          <h1 class={tw`text-5xl font-extrabold sm:text-7xl mb-2`}>
            No Religion. No Work. Just Men.
          </h1>
          <h2 class={tw`text-5xl font-extrabold sm:text-7xl mb-2`}>
            broth·er·hood
          </h2>
          <p class={tw`block text-lg text-gray-300 sm:text-xl`}></p>
          <div class={tw``}>
            <div class={tw``}>'brəT͟Hərˌho͝od/</div>
            <div class={tw``}></div>
          </div>~ an association, society, or community of people linked by a
          common interest, religion, or trade.<p></p>
          <div class={tw`w-full`}>
            <a
              href="/apply-now"
              class={tw`inline-block w-full px-8 py-5 mb-6 text-2xl bg-indigo-700 sm:mb-0 sm:w-auto hover:bg-indigo-600 rounded-xl`}
              data-rounded="rounded-xl"
              data-primary="indigo-600"
            >
              Apply to Join
            </a>
            <a
              href="/learn-more"
              class={tw`inline-block w-full px-8 py-5 text-2xl bg-gray-800 sm:w-auto sm:ml-4 hover:bg-gray-700 rounded-xl`}
              data-rounded="rounded-xl"
            >
              Learn More
            </a>
          </div>
        </div>
        <div
          class={tw`w-full max-w-2xl px-8 mx-auto md:max-w-3xl lg:max-w-6xl lg:px-5`}
        >
          <img
            src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            class={tw` w-full transform lg:pr-10`}
          />
        </div>
      </section>
      <section class={tw`w-full px-8 pt-20 pb-16 bg-white xl:px-0`}>
        <div
          class={tw`flex flex-col items-start max-w-6xl mx-auto md:flex-row`}
        >
          <h2
            class={tw`w-full text-7xl mb-2 font-extrabold tracking-normal text-black sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2`}
          >
            Men helping men
          </h2>
          <div class="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
            <p
              class={tw`col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl`}
            >
              The Brotherhood Group is an organization for men who are looking
              for a place to belong and make friends. We are not a religious
              group or work-related, we simply seek to improve the health and
              happiness of underserved communities.
            </p>
            <p
              class={tw`col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-9 md:text-xl`}
            >
              Our foundation provides free resources to our members via support
              groups, events, workshops and referrals to local health care
              providers.
            </p>
          </div>
        </div>
      </section>
      <section class={tw`w-full px-8 py-16 bg-gray-800 xl:px-8 `}>
        <div class={tw`max-w-6xl mx-auto`}>
          <div class={tw`flex flex-col items-center md:flex-row`}>
            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
              <p class={tw`font-medium text-blue-500 uppercase`}>
                Building Friendship
              </p>

              <p class={tw`text-xl md:pr-16`}>
                The purpose of our club is to foster the development of healthy
                relationships among men through friendly companionship in a
                relaxed atmosphere conducive to meeting people and socializing
                with others.
              </p>
            </div>
            <div class="w-full mt-16 md:mt-0 md:w-2/5">
              <div
                class={tw` h-auto p-8 py-10  px-7`}
              >
                <h3 class={tw`mb-6 text-2xl font-medium text-center`}>
                  Get Notified
                </h3>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class={tw`block w-full px-4 py-3 mb-4 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none`}
                  placeholder="Email address"
                />

                <div class={tw`block`}>
                  <button
                    class={tw`w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg`}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class={tw`w-full px-8 pt-20 pb-16 bg-white xl:px-0`}>
        <div
          class={tw`flex flex-col items-start max-w-6xl mx-auto md:flex-row`}
        >
          <h3
            class={tw`w-full text-7xl font-extrabold tracking-normal text-black sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2`}
          >
            Friends IRL
          </h3>
          <div class="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
            <p
              class={tw`col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl`}
            >
              Do you feel like your social circle can be more inclusive?
              Brotherhood Group was created by a group of men who felt that
              there is value in every perspective, every person and every skill.
            </p>
            <p
              class={tw`col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-9 md:text-xl`}
            >
              We provide an environment where men of all races, ethnicities,
              faiths and experiences can find healthy companionship.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}