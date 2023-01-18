package com.masterpiece.plano.service;

import com.masterpiece.plano.entity.Task;

public interface TaskService {
    Iterable getAllTasks();

    Task getTaskById(String taskId);

    Task createTask(Task taskRequest);

    Task updateTask(String taskId, Task taskRequest);

    String deleteTask(String taskId);
}
