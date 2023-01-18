package com.masterpiece.plano.service;

import com.masterpiece.plano.entity.Project;

public interface ProjectService {
    Iterable getAllProjects();

    Project getProjectById(String projectId);

    Project createProject(Project projectRequest);

    Project updateProject(String projectId, Project projectRequest);

    String deleteProject(String projectId);

    Object putTaskInProject(String projectId, String taskId);
}
