import Head from "next/head";
import Link from "next/link";

function SubheaderText({ text }) {
  return <h2 className="text-lg font-bold text-left mb-3 mt-10">{text}</h2>;
}

function CodeBlock({ children }) {
  if (typeof children === "string") {
    const lines = children.split("\n");
    return (
      <div className="mockup-code">
        {lines.map((line, i) => (
          // For this example, we use the line number as the key.
          <pre key={i} data-prefix={i + 1}>
            <code>{line}</code>
          </pre>
        ))}
      </div>
    );
  }
  return (
    <div className="mockup-code">
      <pre data-prefix="$">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sample Components</title>
        <meta name="description" content="Sample Components" />
      </Head>
      <div className="flex flex-col gap-12 w-3/5 max-w-7xl flex-1 px-16">
        <h1 className="text-2xl font-bold mt-5 text-left">
          This repository is a collection of possible improvements and standardisations when using React components.
        </h1>

        <section>
          <SubheaderText text="1. Don't create your own colours. Having 6 different shades of blue across the system causes inconsistency and confusion. Use the colours from our DaisyUI theme." />
          <div>
            <p>For instance, prefer:</p>
            <CodeBlock>{'<h1 className="text-center text-indigo-500">Sample Components</h1>'}</CodeBlock>
            Over
            <CodeBlock>{'<h1 className="text-center text-primary">Sample Components</h1>'}</CodeBlock>
          </div>

          <div className="card mt-3 bg-neutral">
            <div className="card-body">
              <h2 className="card-title text-secondary">Available Colours</h2>
              <p className="text-secondary text-left">We&apos;re using the corporate theme. Here are the available colours.</p>
              <div className="flex flex-wrap justify-center flex-row mt-4">
                <h1 className="text-center p-3 font-bold">No Colour</h1>
                <h1 className="text-center p-3 text-primary font-bold">Primary</h1>
                <h1 className="text-center p-3 text-secondary font-bold">Secondary</h1>
                <h1 className="text-center p-3 text-success font-bold">Success</h1>
                <h1 className="text-center p-3 text-error font-bold">Error</h1>
                <h1 className="text-center p-3 text-warning font-bold">Warning</h1>
                <h1 className="text-center p-3 text-info font-bold">Info</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Input */}
        <section>
          <SubheaderText
            text={
              <span>
                2. When you create an input, use the input component from{" "}
                <Link className="link" href="https://daisyui.com/components/input/">
                  DaisyUI
                </Link>
                .
              </span>
            }
          />
          More importantly, don&apos;t change the font size - the default should be good enough as it is. Consistency is important in UI design.
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-lg" />
        </section>
        {/* Image */}
        <section>
          <SubheaderText
            text={
              <span>
                3. When you create an image, use the image component from{" "}
                <Link className="link" href="https://daisyui.com/components/image/">
                  DaisyUI
                </Link>
                .
              </span>
            }
          />
          <p>
            This will automatically resize the image to the correct size, and will also lazy load the image. This is important for performance.
            It&apos;s also just as easy to use as a regular image tag.
          </p>
          <div>
            <p>For instance, prefer:</p>
            <CodeBlock>{"<Image src='/images/profile.jpg' width={200} height={200} />"}</CodeBlock>
            Over
            <CodeBlock>{"<img src='/images/profile.jpg' width={200} height={200} />"}</CodeBlock>
          </div>
        </section>
        {/* Naming */}
        <section>
          <SubheaderText text="4. Component names should use PascalCase. This is the convention for React components. PascalCase just means that the first letter of each word is capitalised, as opposed to camelCase, where the first letter of the first word is lowercase." />
          <div>
            <p>For instance, prefer:</p>
            <CodeBlock>{"const ComponentName = () => <div>Component</div>"}</CodeBlock>
            Over
            <CodeBlock>{"const componentName = () => <div>Component</div>"}</CodeBlock>
          </div>
        </section>

        {/* Naming */}
        <section>
          <SubheaderText text="5. Generate element IDs using the 'useId()' hook." />
          <div>
            <p>For instance, prefer:</p>
            <CodeBlock>{`
import { useId } from "react";

const ComponentName = () => {
  const id = useId();
  return <div>
    <label htmlFor={id}>Label</label>
    <input id={id} type="text" />
  <div>
}
            `}</CodeBlock>
            Over
            <CodeBlock>{`
const ComponentName = () => {
  return <div>
    <label htmlFor="input-id">Label</label>
    <input id="input-id" type="text" />
  <div>
}
            `}</CodeBlock>
          </div>
        </section>
        <p className="text-lg text-center mb-3 mt-10">To add more things to this list, just file a PR.</p>
      </div>
    </div>
  );
}
