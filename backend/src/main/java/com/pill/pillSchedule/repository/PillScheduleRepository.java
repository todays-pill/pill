package com.pill.pillSchedule.repository;

import com.pill.pillSchedule.domain.PillSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PillScheduleRepository extends JpaRepository<PillSchedule,Long> {
}
