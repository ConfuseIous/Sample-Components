import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sample Components</title>
        <meta name="description" content="Sample Components" />
      </Head>
      <div className="flex flex-col w-3/5 flex-1 px-20 text-center">
        <h1 className="text-2xl mb-5 mt-5 text-left">
          This is a collection of sample components, aiming to avoid confusion
          and illustrate how Tailwind and DaisyUI should be used.
        </h1>
        <h1 className="text-lg text-left mb-3 mt-5">
          1. Don't create your own colours. It causes inconsistency and
          confusion. Use the colours from our DaisyUI theme.
        </h1>
        <h1 className="text-lg text-error text-left">Don't do this.</h1>
        <div className="mockup-code mb-3">
          <pre data-prefix="$">
            <code>
              {
                '<h1 className="text-center text-indigo-500">Sample Components</h1>'
              }
            </code>
          </pre>
        </div>
        <h1 className="text-lg text-left">
          Do this - this uses colours directly from the DaisyUI theme.
        </h1>
        <div className="mockup-code">
          <pre data-prefix="$">
            <code>
              {
                '<h1 className="text-center text-primary">Sample Components</h1>'
              }
            </code>
          </pre>
        </div>
        <h1 className="text-lg underline text-left mt-3">Available Colours</h1>
        <div className="flex flex-wrap justify-center flex-row mt-4">
          <h1 className="w-1/5 text-center font-bold">No Colour</h1>
          <h1 className="w-1/5 text-center text-primary font-bold">Primary</h1>
          <h1 className="w-1/5 text-center text-secondary font-bold">
            Secondary
          </h1>
          <h1 className="w-1/5 text-center text-success font-bold">Success</h1>
          <h1 className="w-1/5 text-center text-error font-bold">Error</h1>
          <h1 className="w-1/5 text-center text-warning font-bold">Warning</h1>
          <h1 className="w-1/5 text-center text-info font-bold">Info</h1>
        </div>
        {/* TODO: Talk about input, Image, components should be PascalCase  */}
        {/* To add more things, file a PR. */}
      </div>
    </div>
  );
}
