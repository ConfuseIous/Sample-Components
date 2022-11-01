import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sample Components</title>
        <meta name="description" content="Sample Components" />
      </Head>
      <div className="flex flex-col w-3/5 flex-1 px-20 text-center">
        {/* Colours */}
        <h1 className="text-2xl mt-5 text-left">
          This is a simple list of good and "wrong" practices that we've seen in
          some initial code, aiming to avoid confusion and illustrate how
          Tailwind and DaisyUI should be used.
        </h1>
        <h1 className="text-lg text-left mb-3 mt-10">
          1. Don't create your own colours. Having 6 different shades of blue
          across the system causes inconsistency and confusion. Use the colours
          from our DaisyUI theme.
        </h1>
        <h1 className="text-lg text-error text-left pb-1">Don't do this.</h1>
        <div className="mockup-code mb-3">
          <pre data-prefix="$">
            <code>
              {
                '<h1 className="text-center text-indigo-500">Sample Components</h1>'
              }
            </code>
          </pre>
        </div>
        <h1 className="text-lg text-left pb-1">
          Do this - this uses colours directly from the DaisyUI theme.
        </h1>
        <div className="mockup-code mb-3">
          <pre data-prefix="$">
            <code>
              {
                '<h1 className="text-center text-primary">Sample Components</h1>'
              }
            </code>
          </pre>
        </div>
        <div className="card mt-3 bg-neutral">
          <div className="card-body">
            <h2 className="card-title text-secondary">Available Colours</h2>
            <p className="text-secondary text-left">
              We're using the corporate theme. Here are the available colours.
            </p>
            <div className="flex flex-wrap justify-center flex-row mt-4">
              <h1 className="text-center p-3 font-bold">No Colour</h1>
              <h1 className="text-center p-3 text-primary font-bold">
                Primary
              </h1>
              <h1 className="text-center p-3 text-secondary font-bold">
                Secondary
              </h1>
              <h1 className="text-center p-3 text-success font-bold">
                Success
              </h1>
              <h1 className="text-center p-3 text-error font-bold">Error</h1>
              <h1 className="text-center p-3 text-warning font-bold">
                Warning
              </h1>
              <h1 className="text-center p-3 text-info font-bold">Info</h1>
            </div>
          </div>
        </div>
        {/* Input */}
        <h1 className="text-lg text-left mb-3 mt-10">
          2. When you create an input, use the input component from{" "}
          <a
            href="https://daisyui.com/components/input/"
            className="underline text-info"
          >
            DaisyUI
          </a>
          . More importantly, don't change the font size - the default should be
          good enough as it is. Consistency is important in UI design.
        </h1>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs rounded-lg"
        />
        {/* Image */}
        <h1 className="text-lg text-left mb-3 mt-10">
          3. When you need to display an image, use the image component from{" "}
          <a
            className="underline text-info"
            href="https://nextjs.org/docs/api-reference/next/image"
          >
            Next
          </a>
          . This will automatically resize the image to the correct size, and
          will also lazy load the image. This is important for performance. It's
          also just as easy to use as a regular image tag.
        </h1>
        {/* Naming */}
        <h1 className="text-lg text-left mb-3 mt-10">
          4. Component names should use PascalCase. This is the convention for
          React components. PascalCase just means that the first letter of each
          word is capitalised, as opposed to camelCase, where the first letter
          of the first word is lowercase.
        </h1>
        <h1 className="text-lg text-center mb-3 mt-10">
          To add more things to this list, just file a PR.
        </h1>
      </div>
    </div>
  );
}
