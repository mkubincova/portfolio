<script lang="ts">
	import { onMount } from 'svelte';

	const mainMenu: { path: string; name: string }[] = [
		{
			name: 'Home',
			path: '#home'
		},
		{
			name: 'About',
			path: '#about'
		},
		{
			name: 'Projects',
			path: '#projects'
		},
		{
			name: 'Contact',
			path: '#contact'
		}
	];

	// change header opacity
	let scrollY: number;
	let header: HTMLHeadElement;
	let headerOpacity = 0;

	$: if (header) {
		headerOpacity = scrollY / header.offsetHeight < 1 ? scrollY / header.offsetHeight : 1;
	}

	// show/hide offcanvas
	function toggleNav(e: Event) {
		const body = document.querySelector('body');
		const target = e.target as HTMLLinkElement;
		if (target.id === 'logo' && !body?.classList.contains('offcanvas-open')) return;
		body ? body.classList.toggle('offcanvas-open') : '';
	}

	// highlight current section
	let articles: HTMLElement[] = [];
	let prevId: string | null = 'home';
	let currId: string | null = null;

	onMount(() => {
		mainMenu.forEach((item) => {
			if (item.path[0] === '#') {
				let article = document.getElementById(`${item.path.substring(1)}`);
				article && articles?.push(article);
			}
		});
	});

	function getCurrArticle() {
		if (!articles) return;

		for (let i = 0; i < articles.length; i++) {
			let itemPositionY = articles[i].getBoundingClientRect().y;
			if (
				itemPositionY < header.offsetHeight &&
				itemPositionY - header.offsetHeight > -articles[i].offsetHeight
			) {
				currId = articles[i].getAttribute('id');
				break;
			}
		}

		if (prevId === currId) return;
		prevId = currId;
		window.history.replaceState({}, '', `${window.location.pathname}#${currId}`);
	}
</script>

<svelte:window bind:scrollY on:scroll={getCurrArticle} />

<header
	class="sticky top-0 left-0 right-0 p-3 transition-transform duration-200"
	bind:this={header}
	style="--opacity: {headerOpacity};"
>
	<nav class="container flex gap-x-4 gap-y-2 flex-wrap items-center">
		<span class="flex-1"
			><a
				href="#app"
				on:click={toggleNav}
				id="logo"
				class="logo text-xl md:text-3xl"
				aria-label="Home section">Magda.</a
			></span
		>

		<!-- desktop menu -->
		<ul class="site-menu flex gap-8 text-base">
			{#each mainMenu as item, index}
				{#if index !== 0}
					<li>
						<a href={item.path} class={`#${currId}` === item.path ? 'active' : ''}>{item.name}</a>
					</li>
				{/if}
			{/each}
		</ul>

		<span class="contact-menu flex-1 text-right">
			<a href="mailto:mkubincova@proton.me">mkubincova@proton.me</a>
		</span>

		<!-- mobile (offcanvas) menu -->
		<button id="toggle-nav" on:click={toggleNav} class="items-center gap-2 hidden">
			<span class="is-closed text-sm">menu</span>
			<span class="is-open text-sm">close</span>
			<span class="menu-icon"><span class="hamb-line" /></span>
		</button>

		<div
			id="offcanvas-menu"
			class="fixed inset-0 bg-[var(--color-text)] -z-10 translate-x-full transition-transform duration-300 hidden"
		>
			<ul
				class="flex flex-col text-center justify-center gap-8 text-3xl my-[54px] h-[calc(100%-108px)] overflow-auto"
			>
				{#each mainMenu as item, index}
					{#if index !== 0}
						<li class="py-1">
							<a
								href={item.path}
								class="{`#${currId}` === item.path ? 'active' : ''} hidden pb-[0.1em]"
								on:click={toggleNav}>{item.name}</a
							>
						</li>
					{/if}
				{/each}

				<li class="text-lg pt-3"><a href="mailto:mkubincova@proton.me">mkubincova@proton.me</a></li>
			</ul>
		</div>
	</nav>
</header>

<style lang="scss">
	// header opacity transition
	header {
		background-color: rgba(255, 255, 255, var(--opacity));
		box-shadow: 0 -5px 10px rgba(0, 0, 0, var(--opacity));
		z-index: 1000;

		:global(.no-js) & {
			--opacity: 1 !important;
		}
	}

	// nav underline transition
	nav a {
		@apply no-underline inline-block font-medium;
		background: linear-gradient(currentColor, currentColor) 0% 100% no-repeat;
		background-size: 0% 0.15em;
		transition: background-size 0.5s;

		&.active {
			background-size: 1em 0.15em;
		}

		&:hover {
			background-size: 100% 0.15em;
		}

		:global(.no-js) & {
			&.active {
				background-size: 0 0.15em;
			}
			&:hover {
				background-size: 100% 0.15em;
			}
		}

		&.logo {
			background: none;
			font-weight: 700;
		}
	}

	// offcanvas menu for small screen with enabled javascript
	@media (max-width: 767px) {
		:global(.js) {
			header {
				color: var(--header-color);
				transition: color 0.3s ease-in-out;
			}
			.site-menu,
			.contact-menu {
				display: none;
			}
			#offcanvas-menu {
				display: block;
			}

			#toggle-nav {
				display: flex;

				.menu-icon {
					@apply flex flex-col justify-center w-[var(--menu-icon-w)] w-[var(--menu-icon-w)];

					.hamb-line {
						@apply relative w-full h-[var(--menu-icon-line-h)] bg-current;
						&::before,
						&::after {
							@apply content-[''] absolute right-0 w-full h-[var(--menu-icon-line-h)] bg-current;
							transition: rotate 0.2s ease-in-out, top 0.2s ease-in-out;
						}
						&::before {
							top: 8px;
						}
						&::after {
							top: -8px;
						}
					}
				}
				.is-open {
					display: none;
				}
			}

			// open offcanvas menu
			:global(body.offcanvas-open) {
				overflow: hidden;
				header {
					--header-color: var(--color-site-bg);
					--outline-color: var(--color-site-bg);
				}

				#offcanvas-menu {
					transform: translateX(0);

					a {
						display: inline-block;
					}
				}
				#toggle-nav {
					.is-open {
						display: inline;
					}
					.is-closed {
						display: none;
					}
					.hamb-line {
						background: transparent;

						&::before {
							rotate: -45deg;
							top: 0;
						}

						&::after {
							rotate: 45deg;
							top: 0;
						}
					}
				}
			}
		}
	}
</style>
