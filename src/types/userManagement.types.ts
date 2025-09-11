

export type TName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  name: string;
  relationWithStudent: string;
  ocupation: string;
  contactNo: string;
};

export type TlocalGuardian = {
  name: string;
  relationWithStudent: string;
  ocupation: string;
  contactNo: string;
};

export type TStudent = {
    _id:string;
  id: string;
  user: string;
  name: TName;
  gender: string
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TlocalGuardian;
  profileImage: string;
  admissionSemester:string;
  academicDepartment:string;
  academicFaculty:string;
  fullName:string;
  isDeleted:boolean,
  createAt: Date;
  updateAt: Date;
};

export type TFacultyName = {
  firstName: string
  middleName: string
  lastName: string
}

export type TFaculty = {
  name: TFacultyName;
  id:string;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  designation: string;
  profileImage: string;
  academicDepartment: string;
  isDelete: boolean;
  fullName:string;
  _id:string ;
}
export type TAdminName = {
  firstName: string
  middleName: string
  lastName: string
}

export type TAdmin = {
  name: TFacultyName;
  id:string;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  permanentAddress: string;
  designation: string;
  profileImage: string;
  managementDepartment: string;
  isDelete: boolean;
  fullName:string;
  _id:string ;
}

export type TCourse={
  _id:string,
  title:string,
  prefix:string,
  code:string,
  credits:string,
  preRequisiteCourse:Array<T>
}
