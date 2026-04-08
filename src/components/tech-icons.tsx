"use client";

import {
  SiGo, SiPython, SiTypescript, SiCplusplus,
  SiFastapi, SiFlask, SiNodedotjs, SiExpress, SiFastify,
  SiGooglecloud, SiDocker, SiKubernetes, SiCloudflare,
  SiPostgresql, SiMongodb, SiMysql, SiRedis, SiRabbitmq, SiApachekafka,
  SiPytorch, SiLangchain, SiOpencv,
} from "react-icons/si";
import { FaJava, FaAws, FaMicrosoft } from "react-icons/fa";
import {
  TbApi, TbHexagons, TbServer,
  TbBolt, TbBinaryTree, TbStack2, TbEye,
  TbBrain, TbTerminal, TbCloud, TbNetwork,
} from "react-icons/tb";

const S = "w-3.5 h-3.5";

export const techIconMap: Record<string, React.ReactNode> = {
  // Languages
  "Go":         <SiGo className={S} />,
  "Python":     <SiPython className={S} />,
  "TypeScript": <SiTypescript className={S} />,
  "Java":       <FaJava className={S} />,
  "C++":        <SiCplusplus className={S} />,

  // Backend & APIs
  "REST APIs":     <TbApi className={S} />,
  "gRPC":          <TbNetwork className={S} />,
  "Microservices": <TbHexagons className={S} />,
  "FastAPI":       <SiFastapi className={S} />,
  "Flask":         <SiFlask className={S} />,
  "Node.js":       <SiNodedotjs className={S} />,
  "Express":       <SiExpress className={S} />,
  "Fastify":       <SiFastify className={S} />,
  "Chi":           <SiGo className={S} />,

  // Cloud & DevOps
  "AWS":        <FaAws className={S} />,
  "GCP":        <SiGooglecloud className={S} />,
  "Azure":      <FaMicrosoft className={S} />,
  "Docker":     <SiDocker className={S} />,
  "Kubernetes": <SiKubernetes className={S} />,
  "Cloudflare": <SiCloudflare className={S} />,
  "Cloud Run":  <TbCloud className={S} />,

  // Databases & Messaging
  "PostgreSQL": <SiPostgresql className={S} />,
  "MongoDB":    <SiMongodb className={S} />,
  "MySQL":      <SiMysql className={S} />,
  "Redis":      <SiRedis className={S} />,
  "RabbitMQ":   <SiRabbitmq className={S} />,
  "Kafka":      <SiApachekafka className={S} />,

  // Systems & Architecture
  "Distributed Systems": <TbBinaryTree className={S} />,
  "Event-driven":        <TbBolt className={S} />,
  "Queue Processing":    <TbStack2 className={S} />,
  "Service Discovery":   <TbServer className={S} />,
  "Observability":       <TbEye className={S} />,

  // AI / Data
  "LLMs":               <TbBrain className={S} />,
  "RAGs":               <TbBrain className={S} />,
  "MCPs":               <TbBrain className={S} />,
  "PyTorch":            <SiPytorch className={S} />,
  "LangChain":          <SiLangchain className={S} />,
  "OCR":                <TbEye className={S} />,
  "OpenCV":             <SiOpencv className={S} />,
  "Prompt Engineering": <TbTerminal className={S} />,
};
