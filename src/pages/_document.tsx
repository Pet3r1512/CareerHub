import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      ></meta>
      {(process.env.NODE_ENV === "development" ||
        process.env.VERCEL_ENV === "preview") && (
        // eslint-disable-next-line @next/next/no-sync-scripts
        <script
          data-project-id="LlgWSBQE9owFvhO4jb5yM1bsCBd7WbymV8q7BLBJ"
          data-is-production-environment="false"
          src="https://snippet.meticulous.ai/v1/meticulous.js"
        />
      )}
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
