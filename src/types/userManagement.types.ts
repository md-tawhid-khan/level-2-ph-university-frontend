

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
