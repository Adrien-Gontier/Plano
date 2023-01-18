package com.masterpiece.plano.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.sun.istack.NotNull;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;
import org.springframework.lang.Nullable;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;

@JsonIdentityInfo(generator= ObjectIdGenerators.IntSequenceGenerator.class)
@Entity
@Table(name = "project")
public class Project {

    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
    private String projectId;


    @Column(length = 150, nullable = false)
    @NotNull
    private String name;

    @Type(type = "text")
    @Column(nullable = true)
    @Nullable
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(nullable = true, name = "date_deadline")
    @Nullable
    private Date dateDeadLine;


    @Type(type = "text")
    @Column(nullable = true, name = "why_i_passed")
    @Nullable
    private String whyIPassed;


    @Type(type = "text")
    @Column(nullable = true, name = "why_i_failed")
    @Nullable
    private String whyIFailed;

    @Type(type = "text")
    @Column(nullable = true, name = "to_do_better")
    @Nullable
    private String toDoBetter;


    @OneToMany(cascade = CascadeType.MERGE)
    @JoinTable(name= "project_task",
            joinColumns = @JoinColumn(name = "projectId"),
            inverseJoinColumns = @JoinColumn(name = "taskId"))
    private Collection<Task> task;

    public Project() {
    }

    public Project(String projectId, String name, @Nullable String description, @Nullable Date dateDeadLine, @Nullable String whyIPassed, @Nullable String whyIFailed, @Nullable String toDoBetter, Collection<Task> task) {
        this.projectId = projectId;
        this.name = name;
        this.description = description;
        this.dateDeadLine = dateDeadLine;
        this.whyIPassed = whyIPassed;
        this.whyIFailed = whyIFailed;
        this.toDoBetter = toDoBetter;
        this.task = task;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Nullable
    public String getDescription() {
        return description;
    }

    public void setDescription(@Nullable String description) {
        this.description = description;
    }

    @Nullable
    public Date getDateDeadLine() {
        return dateDeadLine;
    }

    public void setDateDeadLine(@Nullable Date dateDeadLine) {
        this.dateDeadLine = dateDeadLine;
    }

    @Nullable
    public String getWhyIPassed() {
        return whyIPassed;
    }

    public void setWhyIPassed(@Nullable String whyIPassed) {
        this.whyIPassed = whyIPassed;
    }

    @Nullable
    public String getWhyIFailed() {
        return whyIFailed;
    }

    public void setWhyIFailed(@Nullable String whyIFailed) {
        this.whyIFailed = whyIFailed;
    }

    @Nullable
    public String getToDoBetter() {
        return toDoBetter;
    }

    public void setToDoBetter(@Nullable String toDoBetter) {
        this.toDoBetter = toDoBetter;
    }

    public Collection<Task> getTask() {
        return task;
    }

    public void setTask(Collection<Task> task) {
        this.task = task;
    }
}
