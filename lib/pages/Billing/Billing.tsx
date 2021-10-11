import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Trans,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'

import { CustomizableDialog } from '../../components/CustomizableDialog/CustomizableDialog'
import CreditPacksCatalog from '../../components/CreditPacksCatalog/CreditPacksCatalog'
import SubscriptionsCatalog from '../../components/SubscriptionsCatalog'
import SubscriptionsTable from '../../components/SubscriptionsTable'
import TransactionsTable from '../../components/TransactionsTable'
import { BillingProps } from './types'
import useStyles from './styles'
import Link from '../../components/Link'

const Billing: React.FC<BillingProps> = ({
  allUserDetails,
  cancelSubscriptionAction,
  clearSubscriptionInfoAction,
  creditPacks,
  dialogInfo,
  getCreditPacksAction,
  getSubscriptionPlansAction,
  getUserDetailsAction,
  getUserInvoiceNotesAction,
  getUserTransactionsAction,
  hasRetrievedAllCreditPacks,
  hasRetrievedAllSubscriptions,
  invoiceNotes,
  purchaseCreditsAction,
  setUserInvoiceNotesAction,
  startSubscriptionAction,
  subscriptions,
  successfullySubscribedToPlan,
  transactions,
  user,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette, spacing } = useTheme()

  const t = (str: string, ...args) => {
    return trans.t(`extensions.billing.${str}`, ...args)
  }

  /* Triggers the retrieval and storage (on the app's Store, under 'billing')
  of all credit packs and subscription plans we presently offer, as well as
  all information we have on a user and his transactions. */
  useEffect(() => {
    getCreditPacksAction('price', 'asc')
    getSubscriptionPlansAction('price', 'asc')
    getUserInvoiceNotesAction(user.id)
    getUserDetailsAction(user.id)
    getUserTransactionsAction()
  }, [])

  /* Credits logic */

  const showCreditPacks = () => {
    if (!hasRetrievedAllCreditPacks) {
      return (
        <Box clone mb={3}>
          <Typography variant="body2">{t('retrievingCreditPacks')}</Typography>
        </Box>
      )
    }

    if (creditPacks.length) {
      return (
        <>
          <Typography variant="body2" color="inherit" gutterBottom>
            {t('creditPacksTitle')}
          </Typography>

          <CreditPacksCatalog
            creditPacks={creditPacks}
            selectedCreditPack={selectedCreditPack}
            handleCreditPackSelection={handleCreditPackSelection}
          />
        </>
      )
    } else {
      return (
        <Box clone mb={3}>
          <Typography gutterBottom variant="body2">
            {t('noCreditPacksAvailable')}
          </Typography>
        </Box>
      )
    }
  }

  // Controls the visibility of all credit top-up packs
  const [wantsToTopUpCredits, setWantsToTopUpCredits] = useState(false)

  const handleWantsToTopUpCredits = () => {
    setWantsToTopUpCredits(!wantsToTopUpCredits)
  }

  // Controls the selection of credit top-up packs
  const [hasSelectedCreditPack, setHasSelectedCreditPack] = useState(false)

  const [selectedCreditPack, setSelectedCreditPack] = useState({
    credits: 0,
    id: 0,
    name: '',
    price: 0,
  })

  const handleCreditPackSelection = (id: number) => {
    if (hasSelectedCreditPack && selectedCreditPack.id === id) {
      setHasSelectedCreditPack(false)

      setSelectedCreditPack({
        credits: 0,
        id: 0,
        name: '',
        price: 0,
      })
    } else {
      const selected = creditPacks.find((creditPack) => {
        return creditPack.id === id
      })

      setHasSelectedCreditPack(true)
      setSelectedCreditPack(selected)
    }
  }

  // Controls the visibility of the 'Confirm credit top-up' dialog
  const [openTopUpDialog, setOpenTopUpDialog] = useState(false)

  const handleOpenTopUpDialog = () => {
    setOpenTopUpDialog(!openTopUpDialog)
  }

  /* Subscriptions logic */

  const showSubscriptions = () => {
    if (!hasRetrievedAllSubscriptions) {
      return (
        <Box clone mb={3}>
          <Typography gutterBottom variant="body2">
            {t('retrievingSubscriptionPlans')}
          </Typography>
        </Box>
      )
    }

    if (subscriptions.length) {
      return (
        <>
          <SubscriptionsCatalog
            activeSubscriptionID={parseInt(allUserDetails.subscriptionID, 10)}
            subscriptions={subscriptions}
            selectedSubscription={selectedSubscriptionPlan}
            handleSubscriptionSelection={handleSubscriptionPlanSelection}
          />
        </>
      )
    } else {
      return (
        <Box clone mb={3}>
          <Typography gutterBottom variant="body2">
            {t('noSubscriptionPlansAvailable')}
          </Typography>
        </Box>
      )
    }
  }

  const [
    hasSelectedSubscriptionPlan,
    setHasSelectedSubscriptionPlan,
  ] = useState(false)

  const [selectedSubscriptionPlan, setSelectedSubscriptionPlan] = useState({
    credits: 0,
    id: 0,
    name: '',
    periodicity: '',
    price: 0,
  })

  const handleSubscriptionPlanSelection = (subscriptionID: number) => {
    if (
      hasSelectedSubscriptionPlan &&
      selectedSubscriptionPlan.id === subscriptionID
    ) {
      setHasSelectedSubscriptionPlan(false)

      setSelectedSubscriptionPlan({
        credits: 0,
        id: 0,
        name: '',
        periodicity: '',
        price: 0,
      })
    } else {
      const selectedSubscription = subscriptions.find(
        (sub) => sub.id === subscriptionID
      )

      setHasSelectedSubscriptionPlan(true)
      setSelectedSubscriptionPlan(selectedSubscription)
    }
  }

  const [
    wantsToStartSubscriptionPlan,
    setWantsToStartSubscriptionPlan,
  ] = useState(false)

  const handleWantsToStartSubscriptionPlan = () => {
    setWantsToStartSubscriptionPlan(!wantsToStartSubscriptionPlan)
  }

  const [wantsToCheckAllSubPlans, setWantsToCheckAllSubPlans] = useState(false)

  const handleWantsToCheckAllSubPlans = () => {
    setWantsToCheckAllSubPlans(!wantsToCheckAllSubPlans)
  }

  const [
    wantsToChangeSubscriptionPlan,
    setWantsToChangeSubscriptionPlan,
  ] = useState(false)

  const handleWantsToChangeSubscriptionPlan = () => {
    setWantsToChangeSubscriptionPlan(!wantsToChangeSubscriptionPlan)
  }

  useEffect(() => {
    if (successfullySubscribedToPlan) {
      setSelectedSubscriptionPlan({
        credits: 0,
        id: 0,
        name: '',
        periodicity: '',
        price: 0,
      })
      setHasSelectedSubscriptionPlan(false)
      setWantsToChangeSubscriptionPlan(false)
    }
  }, [successfullySubscribedToPlan])

  /* Triggers the retrieval and storage (on the app's Store, under 'billing')
  of all information we have on a user and his transactions AFTER the user
  starts or changes his subscription plan. */
  useEffect(() => {
    if (successfullySubscribedToPlan) {
      getUserDetailsAction(user.id)
      getUserTransactionsAction()
    }
  }, [successfullySubscribedToPlan])

  /* Invoice-related logic */

  const [userInvoiceNotes, setUserInvoiceNotes] = useState('')

  const handleUserInvoiceNotes = (invoiceNotesText) => {
    setUserInvoiceNotes(invoiceNotesText)
  }

  useEffect(() => {
    setUserInvoiceNotes(invoiceNotes)
  }, [invoiceNotes, setUserInvoiceNotesAction])

  /* Dialog-related logic */

  const [dialogOpen, setDialogOpen] = useState(false)

  const handleDialogClose = () => {
    setDialogOpen(false)

    // defer clear
    setTimeout(() => {
      clearSubscriptionInfoAction()
    }, 500)
  }

  useEffect(() => {
    if (dialogInfo.transKeys.title.length) {
      setDialogOpen(true)
    }
  }, [dialogInfo.transKeys.title])

  const generateWarning = () => {
    const replacementTagsArray = []

    /* The 'dialogToSWarning.text' translation includes a replacement tag (<0></0>).
    If a 'dialogToSWarning.url' translation exists and is not empty, this will be
    replaced by a <Link> tag, otherwise, no replacement takes place and the translation is rendered normally. */
    if (t('dialogToSWarning.url')) {
      replacementTagsArray.push(
        <Link
          style={{
            color: palette.info.main,
            fontWeight: 400,
          }}
          key="warningUrl"
          rel="noopener noreferrer"
          target="_blank"
          to={t('dialogToSWarning.url')}
        />
      )
    }

    return (
      <Typography
        style={{ color: palette.text.primary, fontWeight: 300 }}
        variant="body2"
      >
        <Trans i18nKey="dialogToSWarning.text" t={t}>
          {replacementTagsArray}
        </Trans>
      </Typography>
    )
  }

  return (
    <>
      <main className={`page-container ${classes.billingContentContainer}`}>
        <Typography variant="h2">{t('title')}</Typography>

        <Box clone mb={5}>
          <Typography variant="body1" color="textSecondary">
            {t('subtitle')}
          </Typography>
        </Box>

        {/* 'Your balance' section */}

        <Box mt={1.5} mb={3}>
          <Typography variant="h3">{t('yourBalance')}</Typography>
        </Box>

        <div
          className={
            wantsToTopUpCredits
              ? classes.yourCreditBalanceContainerWithCreditPacks
              : classes.yourCreditBalanceContainerWithoutCreditPacks
          }
        >
          <Box color={palette.common.white}>
            <Typography variant="body1" color="inherit">
              {t('availableCredits')}
            </Typography>

            <Typography variant="h1" color="inherit">
              {allUserDetails.userCredits}
            </Typography>
          </Box>

          {wantsToTopUpCredits ? (
            <Box color={palette.common.white}>
              <hr className={classes.separator} />

              {showCreditPacks()}

              <div>
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  disableElevation
                  disabled={!selectedCreditPack.id}
                  onClick={handleOpenTopUpDialog}
                >
                  {t('purchaseCreditsButtonLabel')}
                </Button>

                <Box
                  clone
                  ml={1}
                  style={{ backgroundColor: palette.common.white }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    disableElevation
                    onClick={handleWantsToTopUpCredits}
                  >
                    {t('cancelCreditsPurchaseButtonLabel')}
                  </Button>
                </Box>
              </div>
            </Box>
          ) : (
            <Button
              variant="contained"
              size="large"
              color="primary"
              disableElevation
              onClick={handleWantsToTopUpCredits}
            >
              {t('addCreditsButtonLabel')}
            </Button>
          )}
        </div>

        {/* 'Your subscription' section */}

        <Box clone mb={3}>
          <Typography variant="h3">{t('yourSubscriptionsTitle')}</Typography>
        </Box>

        {allUserDetails.subscriptionID ? (
          <>
            <SubscriptionsTable
              subscriptions={[
                {
                  name: subscriptions.find((subscriptionPlan) => {
                    return (
                      subscriptionPlan.id ===
                      parseInt(allUserDetails.subscriptionID)
                    )
                  })?.name,
                  nextBillingDate: allUserDetails.nextPaymentDate,
                },
              ]}
              onCancelSubscription={cancelSubscriptionAction}
            />

            {!wantsToCheckAllSubPlans && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                disableElevation
                onClick={handleWantsToCheckAllSubPlans}
              >
                {t('checkSubPlansButtonLabel')}
              </Button>
            )}

            {wantsToCheckAllSubPlans && (
              <>
                <Box clone mb={3}>
                  <Typography variant="h6">{t('chooseNewSubPlan')}</Typography>
                </Box>

                {showSubscriptions()}

                <Box mt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    disableElevation
                    disabled={!hasSelectedSubscriptionPlan}
                    onClick={handleWantsToChangeSubscriptionPlan}
                    style={{ marginRight: spacing(1.5) }}
                  >
                    {t('startNewSubPlanButtonLabel')}
                  </Button>

                  <Button
                    variant="outlined"
                    color="secondary"
                    size="large"
                    disableElevation
                    onClick={handleWantsToCheckAllSubPlans}
                  >
                    {t('cancelSubPlansCheckingButtonLabel')}
                  </Button>
                </Box>
              </>
            )}
          </>
        ) : (
          <>
            <Box clone mb={3}>
              <Typography variant="body1">
                {t('noActiveSubscriptions')}
              </Typography>
            </Box>

            <Box clone mb={3}>
              <Typography variant="h3">{t('chooseSubscription')}</Typography>
            </Box>

            {showSubscriptions()}

            {/* FIXME */}
            <Button
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              disabled={!hasSelectedSubscriptionPlan}
              onClick={handleWantsToStartSubscriptionPlan}
            >
              {t('startSubscriptionButtonLabel')}
            </Button>
          </>
        )}

        {/* 'Invoice notes' section */}

        <Box clone mb={1.5} mt={5}>
          <Typography variant="h3">
            {t('invoiceNotes.invoiceNotesTitle')}
          </Typography>
        </Box>

        <Box clone mb={3}>
          <Typography variant="body1" color="textSecondary">
            {t('invoiceNotes.invoiceNotesSubtitle')}
          </Typography>
        </Box>

        <Box
          clone
          style={{
            display: 'block',
            maxWidth: 450,
            width: '100%',
          }}
        >
          <TextField
            className={classes.invoiceNotesTextField}
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            label={t('invoiceNotes.invoiceNotesTextFieldLabel')}
            margin="dense"
            multiline
            onChange={(event) => handleUserInvoiceNotes(event.target.value)}
            rows={4}
            type="text"
            value={userInvoiceNotes}
            variant="outlined"
          />
        </Box>

        <Box clone mt={3}>
          <Button
            color="primary"
            disabled={
              (userInvoiceNotes && userInvoiceNotes === invoiceNotes) ||
              (!userInvoiceNotes && userInvoiceNotes === invoiceNotes)
            }
            disableElevation
            onClick={() => setUserInvoiceNotesAction(user.id, userInvoiceNotes)}
            size="large"
            variant="contained"
          >
            {t('invoiceNotes.saveInvoiceNoteButtonLabel')}
          </Button>
        </Box>

        {/* 'Transaction history' section */}

        <Box clone mt={5} mb={1.5}>
          <Typography variant="h3">{t('transactionHistoryTitle')}</Typography>
        </Box>

        <Box clone mb={3}>
          <Typography variant="body1" color="textSecondary">
            {t('transactionHistorySubtitle')}
          </Typography>
        </Box>

        <TransactionsTable transactions={transactions} />
      </main>

      {/* Credit top-up dialog */}
      <CustomizableDialog
        actions={[
          <Button
            className={classes.dialogCancelButton}
            key="cancelCreditTopUp"
            onClick={handleOpenTopUpDialog}
            variant="outlined"
          >
            {t('confirmCreditTopUpDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.dialogConfirmButton}
            key="openTopUpDialog"
            onClick={() => {
              purchaseCreditsAction(selectedCreditPack.id)
            }}
          >
            {t('confirmCreditTopUpDialog.confirmButtonLabel')}
          </Button>,
        ]}
        icon="warning"
        onClose={handleOpenTopUpDialog}
        open={openTopUpDialog}
        subText={t('confirmCreditTopUpDialog.subText')}
        text={t('confirmCreditTopUpDialog.text', {
          creditAmount: selectedCreditPack.credits,
        })}
        title={t('confirmCreditTopUpDialog.title')}
      >
        {generateWarning()}
      </CustomizableDialog>

      {/* Subscription-related dialogs */}
      <CustomizableDialog
        actions={[
          <Button
            key="cancelSubscriptionPlanStart"
            onClick={handleWantsToStartSubscriptionPlan}
            variant="outlined"
          >
            {t('startSubscriptionDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.dialogConfirmButton}
            key="confirmSubscriptionPlanStart"
            onClick={() => {
              startSubscriptionAction(selectedSubscriptionPlan.id)
            }}
          >
            {t('startSubscriptionDialog.confirmButtonLabel')}
          </Button>,
        ]}
        icon="warning"
        onClose={handleWantsToStartSubscriptionPlan}
        open={wantsToStartSubscriptionPlan}
        subText={t('startSubscriptionDialog.subText')}
        text={t('startSubscriptionDialog.text', {
          selectedSubscriptionPlan: selectedSubscriptionPlan.name,
        })}
        title={t('startSubscriptionDialog.title')}
      >
        {generateWarning()}
      </CustomizableDialog>

      <CustomizableDialog
        actions={[
          <Button
            key="cancel-sub-confirm"
            onClick={handleDialogClose}
            variant="outlined"
          >
            {t('closeCTA')}
          </Button>,
        ]}
        icon={dialogInfo.type}
        onClose={handleDialogClose}
        open={dialogOpen}
        subText={t(dialogInfo.transKeys.subText)}
        text={t(dialogInfo.transKeys.text)}
        title={t(dialogInfo.transKeys.title)}
      />

      <CustomizableDialog
        actions={[
          <Button
            className={classes.dialogCancelButton}
            key="cancelSubscriptionPlanChange"
            onClick={handleWantsToChangeSubscriptionPlan}
            variant="outlined"
          >
            {t('changeSubscriptionDialog.cancelButtonLabel')}
          </Button>,
          <Button
            className={classes.dialogConfirmButton}
            key="confirmSubscriptionPlanChange"
            onClick={() => {
              startSubscriptionAction(selectedSubscriptionPlan.id)
            }}
          >
            {t('changeSubscriptionDialog.confirmButtonLabel')}
          </Button>,
        ]}
        icon="warning"
        onClose={handleWantsToChangeSubscriptionPlan}
        open={wantsToChangeSubscriptionPlan}
        subText={t('changeSubscriptionDialog.subText')}
        text={t('changeSubscriptionDialog.text', {
          newlySelectedSubscriptionPlan: selectedSubscriptionPlan.name,
        })}
        title={t('changeSubscriptionDialog.title')}
      >
        {generateWarning()}
      </CustomizableDialog>
    </>
  )
}

export default Billing
