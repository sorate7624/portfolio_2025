import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../app/scss/module/Main.module.scss";
import useHoverBurst from "@/app/hooks/useHoverBurst";

type Skill = { name: string; image: string };

export default function SkillItem({
  skill,
  index,
}: {
  skill: Skill;
  index: number;
}) {
  const ref = useHoverBurst(index);

  return (
    <motion.div
      ref={ref}
      className={styles.box}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.1 * index + 0.3,
          duration: 0.2,
          type: "spring",
          bounce: 0.3,
        },
      }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <Image src={skill.image} alt={skill.name} width={100} height={100} />
      <span>{skill.name}</span>
    </motion.div>
  );
}
