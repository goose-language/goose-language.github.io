import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const code = `
def main() do
  def user = IO::input("What's your name")
  IO::println("Hello {user}!")
end
`.trim();

export default function App() {
  return <header className="mx-auto h-screen grid place-items-center py-16 p-8">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-title font-black lg:w-3/4 text-white tracking-wide text-center mx-auto">
        Uncover the true power of <br/><span className="text-cyan-300 text">Goose language</span>
      </h1>
      <p className="text-xl text-white mx-auto lg:w-3/4 text-center mt-6 opacity-70 font-light">
        Discover a new way of programming with Goose. It's a simple, yet powerful language that will help you write code faster and more efficiently.
      </p>
      <div className="mt-12 bg-slate-900 p-4 mx-auto rounded-xl max-w-2xl shadow-2xl">
        <SyntaxHighlighter 
          language="ruby" style={theme} 
          showLineNumbers customStyle={{ backgroundColor: 'rgb(15 23 42)' }}>
          {code}
        </SyntaxHighlighter>
        <div className="flex gap-4 mt-6">
          <a href="" className="w-1/2 bg-slate-800 py-2 rounded-lg text-white font-medium text-lg font-title hover:shadow-lg hover:shadow-slate-900 transition-shadow duration-200 text-center">
            Learn Goose
          </a>
          <a href="https://github.com/goose-language/goose" className="w-1/2 bg-cyan-500 py-2 rounded-lg text-white font-medium text-lg font-title hover:shadow-lg text-center hover:shadow-cyan-900 transition-shadow duration-200">
            Star on GitHub
          </a>
        </div>
      </div>
    </div>
  </header>
}
