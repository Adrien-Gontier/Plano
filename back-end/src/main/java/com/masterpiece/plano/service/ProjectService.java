package com.masterpiece.plano.service;

import com.masterpiece.plano.dtos.ProjectDto;
import com.masterpiece.plano.entity.Project;
import com.masterpiece.plano.entity.Task;

import java.util.List;

public interface ProjectService {
    List<ProjectDto> getAllProjects();

    Project getProjectById(String projectId);

    Project createProject(Project projectRequest);

    Project updateProject(String projectId, Project projectRequest);

    String deleteProject(String projectId);

    Object putTaskInProject(String projectId, Task taskRequest);
}
