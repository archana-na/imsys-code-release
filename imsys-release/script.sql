drop table IF EXISTS security;
CREATE TABLE `security` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userid` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isLoggedIn` TINYINT(1) NULL,
  `lastLoginTime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `role` (
  `roleCode` varchar(100) NOT NULL,
  `roleName` varchar(255) NOT NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`roleCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `list_value` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `listType` varchar(100) NOT NULL,
  `listCode` varchar(100) NOT NULL,
  `listValue` varchar(255) NOT NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP Table IF EXISTS user_info;
CREATE TABLE `user_info` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userid` varchar(100) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NULL,
  `age` bigint(2) NULL,
  `experience` varchar(255) NULL,
  `qualification` varchar(255) NULL,
  `qualificationDesc` varchar(255) NULL,
  `contactNo` bigint(20) NOT NULL,
  `roleCode` varchar(100) NULL,
  `resumePath` varchar(255) NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP Table IF EXISTS job_master;
CREATE TABLE `job_master` (
`id` int(10) NOT NULL AUTO_INCREMENT,
  `jobCode` varchar(100) NOT NULL,
  `jobName` varchar(255) NOT NULL,
  `jobDesc` varchar(255) NULL,
  `skillName` varchar(255) NULL,
  `qualificationName` varchar(255) NULL,
  `assignedBy` varchar(255) NOT NULL,
  `assignedDate` TIMESTAMP NOT NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `job_master_qualification` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `jobCode` varchar(100) NOT NULL,
  `listCode` varchar(255) NOT NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `job_master_skill` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `jobCode` varchar(100) NOT NULL,
  `listCode` varchar(255) NOT NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE  IF EXISTS `job_transaction`;
CREATE TABLE `job_transaction` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `jobCode` varchar(100) NOT NULL,
  `appliedBy` varchar(255) NOT NULL,
  `appliedDate` TIMESTAMP NOT NULL,
  `createdOn` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




TRUNCATE list_value;
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('role', 	'role1', 'HR'	);
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('role', 	'role2', 'CANDIDATE');

INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('qualification', 'q1',	'BE');
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('qualification', 'q2',	'MCA');
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('qualification', 'q3',	'BSC');

INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('skillset', 'skillset1',	'Java');
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('skillset', 'skillset2',	'Angular');
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('skillset', 'skillset3','MySql');
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('skillset', 'skillset4',	'MyBatis');
INSERT INTO `list_value` (`listType`, 	`listCode`, 	`listValue`	)	VALUES	('skillset', 'skillset5',	'MongoDb');