package com.pill.pillschedule.repository;

import com.pill.pillschedule.domain.PillSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PillScheduleRepository extends JpaRepository<PillSchedule,Long> {
}
