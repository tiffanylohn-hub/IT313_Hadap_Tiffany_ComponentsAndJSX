import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

const students = [
  {
    id: 's1',
    name: 'Ana Cruz',
    course: 'IT313',
    units: 21,
    isFullLoad: true,
  },
  {
    id: 's2',
    name: 'Bea Santos',
    course: 'IT313',
    units: 15,
    isFullLoad: false,
  },
  {
    id: 's3',
    name: 'Cid Ramos',
    course: 'IT313',
    units: 18,
    isFullLoad: true,
  },
  {
    id: 's4',
    name: 'Dex Alonzo',
    course: 'IT313',
    units: 12,
    isFullLoad: false,
  },
];

type StudentCardProps = {
  name: string;
  course: string;
  units: number;
  isFullLoad: boolean;
};

function StudentCard({
  name,
  course,
  units,
  isFullLoad,
}: StudentCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.info}>Course: {course}</Text>

      <Text style={styles.info}>Units: {units}</Text>

      {isFullLoad && (
        <Text style={styles.fullLoad}>Full Load</Text>
      )}
    </View>
  );
}

function StudentRoster() {
  const [studentList, setStudentList] = useState(students);

  const reverseStudents = () => {
    setStudentList([...studentList].reverse());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Roster</Text>

      <Text style={styles.total}>
        Total Students: {studentList.length}
      </Text>

      <Button
        title="Reverse Students"
        onPress={reverseStudents}
      />

      {studentList.map((student,) => (
        <StudentCard
          key={student.id}
          name={student.name}
          course={student.course}
          units={student.units}
          isFullLoad={student.isFullLoad}
        />
      ))}
    </View>
  );
}

export default function HomeScreen() {
  return <StudentRoster />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f5f7fb',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  total: {
    fontSize: 16,
    marginBottom: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  info: {
    fontSize: 15,
    marginBottom: 3,
  },

  fullLoad: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});