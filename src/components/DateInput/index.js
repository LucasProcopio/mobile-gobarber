import React, { useMemo, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format, setDate } from 'date-fns';

import { Container, DateButton, DateText } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpen] = useState(false);
  const dateFormatted = useMemo(() => format(date, 'MMMM Do, yyyy'), [date]);

  function log(event, date) {
    if (date) {
      onChange(date);
    }
    setOpen(false);
  }
  return (
    <Container>
      <DateButton onPress={() => setOpen(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>

      {opened && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={log}
          minimumDate={new Date()}
        />
      )}
    </Container>
  );
}
