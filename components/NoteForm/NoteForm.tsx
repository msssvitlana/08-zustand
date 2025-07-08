
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./NoteForm.module.css";
import { createNote } from '../../lib/api';;
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { NewNoteData, NoteTag } from "../../types/note";

interface NoteFormProps {

  onSuccess: () => void;
}

const NoteSchema = Yup.object().shape({
  title: Yup.string().min(3, "Min 3 characters").max(50, "Max 50 characters").required("Title is required"),
  content: Yup.string().max(500, "Max 500 characters"),
  tag: Yup.mixed<NoteTag>().oneOf(["Todo", "Work", "Personal", "Meeting", "Shopping"]).required("Tag is required"),
});

const NoteForm = ({ onSuccess }: NoteFormProps) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newNote: NewNoteData) => createNote(newNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Notes"] });
      onSuccess();
    },
  });

  return (
    <Formik
      initialValues={{ title: "", content: "", tag: "Todo" as NoteTag }}
      validationSchema={NoteSchema}
      onSubmit={(values, { setSubmitting }) => {
        mutation.mutate(values, {
          onSettled: () => {
            setSubmitting(false);
          }
        })
        
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" className={css.input} />
            <ErrorMessage name="title" component="span" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="content">Content</label>
            <Field as="textarea" id="content" name="content" rows={8} className={css.textarea} />
            <ErrorMessage name="content" component="span" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="tag">Tag</label>
            <Field as="select" id="tag" name="tag" className={css.select}>
              <option value="Todo">Todo</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Meeting">Meeting</option>
              <option value="Shopping">Shopping</option>
            </Field>
            <ErrorMessage name="tag" component="span" className={css.error} />
          </div>

          <div className={css.actions}>
            <button type="button" className={css.cancelButton} onClick={onSuccess}>
              Cancel
            </button>
            <button type="submit" className={css.submitButton} disabled={isSubmitting}>
              Create note
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
