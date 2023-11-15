import{_ as s,o as a,c as o,Q as e}from"./chunks/framework.36bc40e2.js";const b=JSON.parse('{"title":"Installation","description":"","frontmatter":{"title":"Installation","outline":"deep"},"headers":[],"relativePath":"docs/contribute/intro.md","filePath":"docs/contribute/intro.md","lastUpdated":1700009402000}'),l={name:"docs/contribute/intro.md"},n=e(`<h2 id="clone-repo" tabindex="-1">Clone Repo <a class="header-anchor" href="#clone-repo" aria-label="Permalink to &quot;Clone Repo&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--recurse-submodules</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:oxc-project/oxc.git</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oxc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--recurse-submodules</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:oxc-project/oxc.git</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oxc</span></span></code></pre></div><p>The <code>--recurse-submodules</code> flag will also clone some submodules (<a href="https://github.com/tc39/test262" target="_blank" rel="noreferrer">test262</a>, <a href="https://github.com/babel/babel" target="_blank" rel="noreferrer">babel</a>, <a href="https://github.com/microsoft/TypeScript" target="_blank" rel="noreferrer">typescript</a>).</p><h2 id="new-to-rust" tabindex="-1">New to Rust <a class="header-anchor" href="#new-to-rust" aria-label="Permalink to &quot;New to Rust&quot;">​</a></h2><h3 id="install-rust" tabindex="-1">Install Rust <a class="header-anchor" href="#install-rust" aria-label="Permalink to &quot;Install Rust&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--proto</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;=https&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--tlsv1.2</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-sSf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://sh.rustup.rs</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sh</span></span>
<span class="line"><span style="color:#B392F0;">rustup</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">show</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">curl</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--proto</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;=https&#39;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--tlsv1.2</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-sSf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://sh.rustup.rs</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sh</span></span>
<span class="line"><span style="color:#6F42C1;">rustup</span><span style="color:#24292E;"> </span><span style="color:#032F62;">show</span></span></code></pre></div><p><code>rustup show</code> reads the <code>./rust-toolchain.toml</code> file and installs the correct Rust toolchain and components for this project.</p><h3 id="cargo-tools" tabindex="-1">Cargo Tools <a class="header-anchor" href="#cargo-tools" aria-label="Permalink to &quot;Cargo Tools&quot;">​</a></h3><p>Some additional Cargo tools are required for developing this project, they can be installed via <a href="https://github.com/cargo-bins/cargo-binstall" target="_blank" rel="noreferrer"><code>cargo binstall</code></a>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cargo-binstall</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cargo-binstall</span></span></code></pre></div><p><code>cargo binstall</code> provides a low-complexity mechanism for installing rust binaries as an alternative to building from source via the slower <code>cargo install</code>.</p><p>You can also download the <a href="https://github.com/cargo-bins/cargo-binstall#installation" target="_blank" rel="noreferrer">pre-compiled binary</a> and save it in <code>~/.cargo/bin</code>.</p><h2 id="required-tools" tabindex="-1">Required tools <a class="header-anchor" href="#required-tools" aria-label="Permalink to &quot;Required tools&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">cargo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">binstall</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">just</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cargo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">binstall</span><span style="color:#24292E;"> </span><span style="color:#032F62;">just</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span></span></code></pre></div><p><a href="https://github.com/casey/just" target="_blank" rel="noreferrer"><code>just</code></a> is a handy way to save and run project-specific commands. To initialize all the required tools, run</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">just</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">just</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><h2 id="commands" tabindex="-1">Commands <a class="header-anchor" href="#commands" aria-label="Permalink to &quot;Commands&quot;">​</a></h2><p>Run <code>just</code> for the list of available commands.</p><p>Run <code>just r</code> (alias for <code>just ready</code>) to make sure the whole project builds and runs correctly.</p>`,19),t=[n];function p(r,c,i,d,h,u){return a(),o("div",null,t)}const E=s(l,[["render",p]]);export{b as __pageData,E as default};
