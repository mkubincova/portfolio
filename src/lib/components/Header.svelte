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
		}
	];

	// change header opacity
	let scrollY: number;
	let header: HTMLHeadElement;
	let headerOpacity = 0;

	$: if (header) {
		headerOpacity = scrollY / header.offsetHeight < 1 ? scrollY / header.offsetHeight : 1;
	}

	// show/hide mobile menu
	function toggleNav() {
		const body = document.querySelector('body');
		body ? body.classList.toggle('offcanvas-open') : '';
	}

	// highlight current section
	let articles: HTMLElement[] = [];
	let prevId: string | null = 'home';
	let currId: string | null = null;

	// get all articles from menu
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
	class="fixed top-0 left-0 right-0 z-10 p-3 transition-transform duration-200"
	bind:this={header}
	style="--opacity: {headerOpacity};"
>
	<nav class="container flex gap-x-4 gap-y-2 flex-wrap items-center">
		<span class="flex-1"><a href="#home" class="logo font-bold text-xl md:text-3xl">Magda.</a></span
		>

		<button id="toggle-nav" on:click={toggleNav} class="items-center gap-2">
			<span class="is-closed text-sm">menu</span>
			<span class="is-open text-sm">close</span>
			<span class="menu-icon"><span class="hamb-line" /></span>
		</button>

		<ul class="site-menu flex gap-8 text-base">
			{#each mainMenu as item, index}
				<li>
					<a
						href={item.path}
						class={!currId
							? index === 0
								? 'active'
								: ''
							: `#${currId}` === item.path
							? 'active'
							: ''}>{item.name}</a
					>
				</li>
			{/each}
		</ul>

		<span class="contact-menu flex-1 text-right">
			<a href="mailto:mkubincova@proton.me">mkubincova@proton.me</a>
		</span>
	</nav>
</header>

<style lang="scss">
	header {
		background-color: rgba(255, 255, 255, var(--opacity));
		box-shadow: 0 -5px 10px rgba(0, 0, 0, var(--opacity));

		:global(.no-js) & {
			background-color: #fff;
			box-shadow: 0 -5px 10px #000;
		}
	}

	nav a {
		text-decoration: none;
		display: inline-block;
		background-image: linear-gradient(currentColor, currentColor);
		background-position: 0% 100%;
		background-repeat: no-repeat;
		background-size: 0% 0.15em;
		transition: background-size 0.5s;

		&.active {
			background-size: 1em 0.15em;

			:global(.no-js) & {
				background-size: 0 0.15em;
			}
		}

		&:hover {
			background-size: 100% 0.15em;

			:global(.no-js) & {
				background-size: 100% 0.15em;
			}
		}

		&.logo {
			background-image: none;
		}
	}

	#toggle-nav {
		display: none;
	}

	@media (max-width: 767px) {
		:global(.js) {
			header {
				color: var(--header-color);
				transition: color 0.3s ease-in-out;

				nav {
					height: var(--menu-icon-w);
				}

				&::before {
					content: '';
					position: fixed;
					inset: 0;
					background-color: var(--color-text);
					transform: translateX(100%);
					z-index: -1;
					transition: transform 0.3s ease-in-out;
				}
			}
			.site-menu,
			.contact-menu {
				position: relative;
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-top: 30px;
				transform: translateX(100%);
				visibility: hidden;
				pointer-events: none;
				transition: transform 0.3s ease-in-out;
			}
			.site-menu {
				font-size: 2.5rem;
				line-height: 1.5;
				padding: 20% 0;
			}

			#toggle-nav {
				display: flex;

				.menu-icon {
					width: var(--menu-icon-w);
					height: var(--menu-icon-w);
					display: flex;
					flex-direction: column;
					justify-content: center;

					.hamb-line {
						position: relative;
						width: 100%;
						height: var(--menu-icon-line-h);
						background-color: currentColor;
						&::before,
						&::after {
							content: '';
							position: absolute;
							left: 0;
							width: 100%;
							height: var(--menu-icon-line-h);
							background-color: currentColor;
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
					--header-color: var(--color-text-inverse);
					--outline-color: var(--color-text-inverse);
					&::before {
						transform: translateX(0);
					}
				}
				.site-menu,
				.contact-menu {
					transform: translateX(0);
					visibility: visible;
					pointer-events: all;
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
					}
					.hamb-line::before {
						rotate: -45deg;
						top: 0;
					}
					.hamb-line::after {
						rotate: 45deg;
						top: 0;
					}
				}
			}
		}
	}
</style>
