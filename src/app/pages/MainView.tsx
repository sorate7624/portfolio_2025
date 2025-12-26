"use client";

import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { skills } from "@/app/constants/skills";
import { links } from "@/app/constants/links";
import { experience } from "@/app/constants/experience";
import { timeline } from "@/app/constants/timeline";
import { plans } from "@/app/constants/plans";
import { TypeAnimation } from "react-type-animation";
import { Tooltip } from "react-tooltip";
import SkillItem from "components/SkillItem";
import styles from "../scss/module/Main.module.scss";
import { motion } from "motion/react";
import { Timeline, TimelineEvent } from "@mailtop/horizontal-timeline";
import type * as Mojs from "@mojs/core";

export default function MainView() {
  useEffect(() => {
    let mojsLib: typeof Mojs | undefined;

    const clickPagination = (e: Event) => {
      if (!mojsLib) {
        return;
      }
      new mojsLib.Burst({
        parent: e.currentTarget as HTMLElement,
        left: "50%",
        top: "50%",
        x: 0,
        y: 0,
        radius: { 8: 70 },
        count: 10,
        children: {
          shape: "circle",
          radius: 8,
          fill: "pink",
          duration: 800,
        },
      })
        .tune({ x: 0, y: 0 })
        .replay();
    };

    import("@mojs/core").then((mojs) => {
      mojsLib = mojs.default || mojs;

      const buttons = document.querySelectorAll(".pagination");
      buttons.forEach((btn) => {
        btn.addEventListener("click", clickPagination);
      });

      return () => {
        buttons.forEach((btn) => {
          btn.removeEventListener("click", clickPagination);
        });
      };
    });
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `
        <button class="pagination ${className}">
          <svg class="heart" viewBox="0 0 24 24">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 C2 6 4 4 6.5 4c1.54 0 3.04.81 3.9 2.09C11.26 4.81 12.76 4 14.3 4 C16.8 4 18.8 6 18.8 8.5c0 3.78-3.4 6.86-8.25 11.49L12 21.35z"
            />
          </svg>
        </button>`;
    },
  };

  return (
    <>
      <Swiper
        direction={"vertical"}
        mousewheel={true}
        spaceBetween={0}
        modules={[Pagination, Mousewheel]}
        grabCursor={true}
        loop={false}
        keyboard={{
          enabled: true,
        }}
        initialSlide={0}
        pagination={pagination}
        className={styles["custom-swiper"]}
      >
        <SwiperSlide>
          <h3>Intro</h3>
          <section className={styles["intro"]}>
            <div className={styles["profile"]}>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  lineHeight: "normal",
                }}
                sequence={[
                  `이름: 최혜진\n` +
                    `자기소개: 개발자가 되어 게임회사에서 일하며,\n지금까지 꿈꿔온 목표들을 하나씩 이루어가고 있는\n프론트엔드 개발자입니다.\n\n` +
                    `취미: 게임, 여행, 러닝\n` +
                    `이메일: sorate_@naver.com\n` +
                    `깃헙: https://github.com/sorate7624\n`,
                  15000,
                  "",
                  1000,
                ]}
                repeat={Infinity}
              />
            </div>
            <motion.img
              src="/images/picture.jpeg"
              alt="figure_picture"
              width={500}
              height={500}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.2 }}
            />
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Skill</h3>
          <section className={styles["skill"]}>
            {skills.map((skill, index) => {
              return <SkillItem key={skill.name} skill={skill} index={index} />;
            })}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Experience</h3>
          <section className={styles["experience"]}>
            {experience.map((experience, index) => {
              const rotateAngles: Record<number, number> = {
                0: 6,
                4: 6,
                1: -3,
                5: -3,
                2: 4,
                3: -3,
              };
              const rotate = rotateAngles[index] ?? 0;
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, scale: 1.3, rotate: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: rotate,
                    transition: {
                      delay: 0.1 * index + 0.3,
                      duration: 0.2,
                      type: "spring",
                      bounce: 0.3,
                    },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <h4>{experience.title}</h4>
                  <ul>
                    {experience.list.map((list, index) => {
                      return (
                        <li key={`list-${index + 1}`}>
                          {list.subTitle && <strong>{list.subTitle}: </strong>}
                          <span
                            dangerouslySetInnerHTML={{ __html: list.desc }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              );
            })}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Project</h3>
          <section className={styles["link"]}>
            {links.map((link, index) => {
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  className={`${styles["box"]} ${`link-${index + 1}`}`}
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: 0.1 * index + 0.3,
                      duration: 0.2,
                    },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <Image
                    width="320"
                    height="180"
                    style={{ width: "auto", height: "auto" }}
                    src={link.image}
                    alt={link.label}
                  />
                  <span>{link.label}</span>
                  <Tooltip
                    anchorSelect={`.link-${index + 1}`}
                    content={link.tooltips}
                  />
                </motion.a>
              );
            })}
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Timeline</h3>
          <section className={styles["timeline"]}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.1,
                  duration: 0.4,
                },
              }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <Timeline minEvents={1}>
                {timeline.map((t) => (
                  <TimelineEvent
                    color={t.color}
                    title={t.title}
                    subtitle={t.subtitle}
                  />
                ))}
              </Timeline>
            </motion.div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Plans</h3>
          <section className={styles["plans"]}>
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                className={`${styles["box"]} ${`box-${index + 1}`}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.1 * index + 0.1,
                    duration: 0.2,
                  },
                }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4>{plan.title}</h4>
                <ul>
                  {plan.description.map((desc, index) => (
                    <li key={index}>- {desc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
