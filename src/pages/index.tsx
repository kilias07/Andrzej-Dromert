import { Inter } from "@next/font/google";
import { motion } from "framer-motion";
import type { GetStaticProps, NextPage } from "next";
import Cta from "../components/MainSite/cta";
import { HeroSection } from "../components/MainSite/HeroSection";
import { HeroSection2 } from "../components/MainSite/HeroSection2";
import { Statement } from "../components/MainSite/Statement";

const inter = Inter({ subsets: ["latin"] });

interface Props {
	posts: IPosts[];
}
export const getStaticProps: GetStaticProps = async () => {
	const posts = await ContentService.instance.getEntriesByType<IPosts[]>(
		"posts"
	);

	return {
		props: {
			posts,
		},
	};
};

const Home: NextPage<Props> = ({ posts }) => {
	return (
		<motion.div
			exit={{ opacity: 0 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<HeroSection2 />
			<Statement />
			<Cta />
			<HeroSection />
		</motion.div>
	);
};

export default Home;
