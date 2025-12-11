"use client";

import React from "react";
import Shape from "@/app/_components/Shape/Shape";
import useColor from "@/hooks/useColor";
import { useProject } from "@/hooks/useProjects";
import classNames from "classnames";
import SkillIcon from "@/app/_components/SkillIcon/SkillIcon";
import "./project-detail.scss";
import { buildContentTree } from "@/utils/buildTree";

interface Props {
  id: string;
}

const ProjectDetail = ({ id }: Props) => {
  const { data, isLoading } = useProject(id);
  const { getColor } = useColor();

  if (isLoading)
    return (
      <div className="project__detail-container animate-pulse">
        <div className="project__detail-header">
          <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
          <h1 className="w-full h-8 bg-gray-200 rounded-lg"></h1>
          <div>
            <div className="project__detail-caption">프로젝트 설명</div>
            <p className="project__detail-description w-[80%] h-6 bg-gray-200 rounded-lg"></p>
            <p className="project__detail-description w-[50%] h-6 bg-gray-200 rounded-lg"></p>
          </div>
          <div>
            <div className="project__detail-caption">기술 스택</div>
            <div className="project__detail-skills">
              {[1, 2, 3].map((_) => (
                <div key={_} className="w-6 h-6 bg-gray-200 rounded-sm"></div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="project__detail-caption">참여 인원</div>
              <p className="w-12 h-6 bg-gray-200 rounded-lg mt-2"></p>
            </div>
            <div>
              <div className="project__detail-caption">기간</div>
              <p className="w-30 h-5 bg-gray-200 rounded-lg mt-2"></p>
            </div>
          </div>
        </div>
        <div className="project__detail-divider"></div>
        <div className="project__detail-content">
          <h2 className="project__detail-content-title">상세 내용</h2>
          <div className="project__detail-content-list level-0">
            {[1, 2, 3].map((content) => (
              <div className="project__detail-content-text" key={content}>
                <div className="w-100 h-6 bg-gray-200 rounded-lg"></div>
                <div className="project__detail-content-list level-1">
                  {[1, 2].map((child) => (
                    <div className="project__detail-content-text" key={child}>
                      <div className="w-50 h-4 bg-gray-200 rounded-sm"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  if (!data) return <div>Project not found</div>;

  return (
    <div className={classNames("project__detail-container")}>
      <div className="project__detail-header">
        <Shape
          className={classNames(
            "project__detail-shape",
            `shape--${getColor(data.id)}`
          )}
          id={data.id}
          size="lg"
        />
        <h1 className="project__detail-title">{data.title}</h1>
        <div>
          <div className="project__detail-caption">프로젝트 설명</div>
          <p className="project__detail-description">{data.description}</p>
        </div>
        <div>
          <div className="project__detail-caption">기술 스택</div>
          <div className="project__detail-skills">
            {data.skills.map((skill) => (
              <SkillIcon key={skill} skill={skill} size="sm" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="project__detail-caption">참여 인원</div>
            <p>{data.participants}</p>
          </div>
          <div>
            <div className="project__detail-caption">기간</div>
            <p>{data.period}</p>
          </div>
        </div>
      </div>
      <div className="project__detail-divider"></div>
      <div className="project__detail-content">
        <h2 className="project__detail-content-title">상세 내용</h2>
        <ol className="project__detail-content-list level-0">
          {buildContentTree(data.contents).map((content) => (
            <li className="project__detail-content-text" key={content.id}>
              {content.content}
              <ul className="project__detail-content-list level-1">
                {content.children &&
                  content.children.map((child) => (
                    <li className="project__detail-content-text" key={child.id}>
                      {child.content}
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProjectDetail;
