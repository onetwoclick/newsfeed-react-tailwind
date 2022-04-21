import Header from "../Components/Header";
import Post from "../Components/Post";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const posts = [
  {
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
  },
  {
    title: 'Writing effective landing page copy',
    href: '#',
    description:
      'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
    date: 'Jan 29, 2020',
    datetime: '2020-01-29',
  },
]

export default function Example() {
  return (
    <>
      {/* Background color split screen for large screens */}
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
      <div className="relative min-h-screen flex flex-col">
        <Header />
        {/* 3 column wrapper */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* Left sidebar & main wrapper */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* Start left column area */}
                <div className="mt-2 pt-2 grid gap-4 lg:grid-cols-1 lg:gap-x-2 lg:gap-y-4">
                  {posts.map((post) => (
                    <div key={post.title}>
                      <p className="text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                      </p>
                      <a href="#" className="mt-2 block">
                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      </a>
                    </div>
                  ))}
                </div>
                {/* End left column area */}
              </div>
            </div>

            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-1 px-1 sm:px-1 lg:px-1">
                {/* Start main area*/}
                <Post />
                {/* End main area */}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              {/* Start right column area */}
              <div className="mt-2 pt-2 grid gap-4 lg:grid-cols-1 lg:gap-x-2 lg:gap-y-4">
                {posts.map((post) => (
                  <div key={post.title}>
                    <p className="text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                    </p>
                    <a href="#" className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    </a>
                  </div>
                ))}
              </div>
              {/* End right column area */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
