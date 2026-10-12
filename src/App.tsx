import githubLogoBlack from '@/assets/github-logo-black.svg';
import githubLogoWhite from '@/assets/github-logo-white.svg';
import logo from '@/assets/logo.svg';
import { LegalDialog } from '@/components/LegalDialog.tsx';
import { Toaster } from '@/components/ui/sonner';
import { ImageEditor } from '@/image-editor/ImageEditor.tsx';
import { TermsContent } from './TermsContent.tsx';

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Toaster position="top-right" />
      <header className="flex items-center justify-center gap-3">
        <img className="size-9 shrink-0 md:size-14" src={logo} alt="" />
        <h1 className="my-4 text-center text-3xl font-medium tracking-tight md:my-8 md:text-6xl">
          Dog Photo Mask
        </h1>
      </header>
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col p-5">
        <ImageEditor />
      </main>
      <footer className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-3 py-4 text-sm md:gap-4 md:py-6">
        <LegalDialog title="利用規約">
          <TermsContent />
        </LegalDialog>
        <LegalDialog title="プライバシーポリシー">
          <p>プライバシーポリシー本文</p>
        </LegalDialog>
        <a
          href="https://github.com/ryufuta/dog-photo-mask"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHubリポジトリ"
        >
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet={githubLogoWhite}
            />
            <img src={githubLogoBlack} alt="" className="size-6" />
          </picture>
        </a>
      </footer>
    </div>
  );
}

export default App;
