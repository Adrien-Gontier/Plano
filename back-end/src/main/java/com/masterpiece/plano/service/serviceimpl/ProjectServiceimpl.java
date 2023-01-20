package com.masterpiece.plano.service.serviceimpl;

import com.masterpiece.plano.dtos.ProjectDto;
import com.masterpiece.plano.entity.Project;
import com.masterpiece.plano.entity.Task;
import com.masterpiece.plano.exception.ResourceNotFoundException;
import com.masterpiece.plano.repository.ProjectRepository;
import com.masterpiece.plano.service.ProjectService;
import com.masterpiece.plano.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class ProjectServiceimpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final TaskService taskService;

    public ProjectServiceimpl(ProjectRepository projectRepository, TaskService taskService) {
        this.projectRepository = projectRepository;
        this.taskService = taskService;
    }

    @Override
    public List<ProjectDto> getAllProjects() {
        List<Project> projectList = projectRepository.findAll();
        List<ProjectDto> projectDTOList = new ArrayList<>();

        for (var project: projectList) {
            var projectDTO = ProjectDto.builder()
                    .idProject(project.getProjectId())
                    .name(project.getName())
                    .deadLineDate(project.getDateDeadLine())
                    .build();
            projectDTOList.add(projectDTO);
        }
        return projectDTOList;
    }

    @Override
    public Project getProjectById(String projectId) {
        return projectRepository.findById(projectId).orElseThrow(() ->
                new ResourceNotFoundException("This project doesn't exist")
        );
    }

    @Override
    public Project createProject(Project projectRequest) {
        return projectRepository.save(projectRequest);
    }

    @Override
    public Project updateProject(String projectId, Project projectRequest) {
       var project = getProjectById(projectId);
       project.setName(projectRequest.getName());
       project.setDescription(projectRequest.getDescription());
       project.setDateDeadLine(projectRequest.getDateDeadLine());
       project.setWhyIPassed(projectRequest.getWhyIPassed());
       project.setWhyIFailed(projectRequest.getWhyIFailed());
       project.setToDoBetter(projectRequest.getToDoBetter());
       return projectRepository.save(project);
    }

    @Override
    public String deleteProject(String projectId) {
        var project = getProjectById(projectId);
        projectRepository.delete(project);
        return "This project has been deleted successfully";
    }

    @Override
    public Object putTaskInProject(String projectId, String taskId) {
        Project project = getProjectById(projectId);
        Task task = taskService.getTaskById(taskId);
        project.getTask().add(task);
        return projectRepository.save(project);
    }
    // TODO make this request to create a task in the project
}
